<?php

namespace App\Http\Controllers;

use App\Models\Button;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ButtonController extends Controller {
    //TODO get all the buttons returns items json array
    public function getButtons(Request $request): JsonResponse {
        $id = $request->query('id');
        if ($id) {
            $button = Button::find($id);
            return response()->json($button);
        }

        return response()->json(Button::all());
    }

    //Save Button
    public function saveButton(Request $request): JsonResponse  {

        $button = new Button();

        $button->id    = $request->query('id');
        $button->title = $request->query('title');
        $button->link  = $request->query('link');
        $button->color = $request->query('color');

        $button->save();
    }

    //Delete Button
    public function deleteButton(Request $request): JsonResponse  {
        $id = $request->query('id');

        $button = Button::find($id);

        $button->delete();
    }
}
