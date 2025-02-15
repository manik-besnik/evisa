<?php

namespace App\Http\Controllers\Admin;

use App\Enums\NotificationType;
use App\Http\Controllers\Controller;
use App\Models\Notification;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }


    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        /** @var Notification|null $notification */
        $notification = Notification::query()->findOrFail($id);

        if ($notification->type === NotificationType::VISA_APPLY->value) {

            $payload = (array)$notification->payload;

            if (isset($payload['id'])) {

                $notification->delete();
                return to_route('admin.visa-applies.show', $payload['id']);
            }

            return redirect()->back()->withErrors(['message' => "Something Went Wrong"]);
        }

        $notification->delete();

        return redirect()->back();
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Notification $notification)
    {
        //
    }
}
