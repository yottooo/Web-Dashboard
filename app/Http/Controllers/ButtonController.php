<?php

namespace App\Http\Controllers;

use App\Models\Button;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ButtonController extends Controller {

    public function edit($index) {
        $item = Button::find($index);  // Assuming you have a 'Button' model for your data

        if (!$item) {
            return Inertia::render('Edit');
        }

        // Pass the data to the Inertia view
        return Inertia::render('Edit', [
            'item' => $item,  // Pass the fetched data to the 'Edit' view
            'index' => $index // Pass the index if needed
        ]);
    }

    public function getButton($id): JsonResponse {
        // Fetch button data from the database
        $button = Button::find($id);
        if ($button) {
            return response()->json($button);
        } else {
            return response()->json(['error' => 'Button not found'], 404);
        }
    }

    public function getButtons(Request $request): JsonResponse {
        // Fetch all buttons from the database, starting from 0 and limiting to 9
        $buttons = Button::orderBy('id', 'asc')->take(9)->get();
        $buttonIds = $buttons->pluck('id')->toArray(); // This will give you an array of IDs
        // If the number of buttons is less than 9, fill the rest with default empty entries
        $filledButtons = $buttons->toArray();
        $lastId = 0;
        // Add empty entries for missing buttons
        for ($i = count($filledButtons); $i < 9; $i++) {
            // Increment the lastId to get a new unique ID
            do {
                $lastId++; // Increment the ID
            } while (in_array($lastId, $buttonIds)); // Ensure it's not already used

            $filledButtons[] = [
                'id' => $lastId,
                'link' => '',
                'color' => '#f0f0f0', // A default color for the empty entry
                'title' => 'Create A Button',
            ];
        }

        // Return the filled array of buttons as a JSON response
        return response()->json($filledButtons);
    }

    //Save Button
    public function saveButton(Request $request): JsonResponse {
        // Validate the request
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'link' => 'nullable|url',
            'color' => 'required|string|max:7', // color input is a hex value
            'index' => 'nullable|integer', // Validate that index is an integer and optionally exists in the buttons table
        ]);
        // Mass assignment if fillable is defined in Button model
        $button = Button::updateOrCreate(
            ['id' => $validated['index'] ?? null], // Search for the button by its ID
            [
                'title' => $validated['title'],
                'link' => $validated['link'],
                'color' => $validated['color'],
            ]
        );

        // Return a JSON response with the saved button and a success message
        return response()->json([
            'message' => 'Button saved successfully!',
            'button' => $button
        ], 201); // 201 status code for resource creation
    }

    //Delete Button
    public function deleteButton(Request $request): JsonResponse {
        // Validate the 'id' query parameter
        $validated =$request->validate([
            'index' => 'integer', // Ensure the ID exists in the buttons table
        ]);
        try {
            // Find the button by ID
            $button = Button::findOrFail($validated['index']);

            // Delete the button
            $button->delete();

            // Return a success message with a 200 status code
            return response()->json([
                'message' => 'Button deleted successfully!',
            ], 200);
        } catch (ModelNotFoundException $e) {
            // Return a custom error message when the button does not exist
            return response()->json([
                'error' => 'Button does not exist.',
            ], 404);
        }
    }
}
