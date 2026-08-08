<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Reservation;
use Illuminate\Http\Request;
use App\Mail\ReservationConfirmed;
use Illuminate\Support\Facades\Mail;

class ReservationController extends Controller
{
    // Get all reservations
    public function index()
    {
        $reservations = Reservation::latest()->get();

        return response()->json($reservations);
    }

    // Create a reservation
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:30',
            'guests' => 'required|integer|min:1',
            'date' => 'required|date',
            'time' => 'required',
            'requests' => 'nullable|string',
        ]);

        $reservation = Reservation::create($validated);

        return response()->json([
            'message' => 'Reservation created successfully',
            'reservation' => $reservation,
        ], 201);
    }

    // Get one reservation
    public function show($id)
    {
        $reservation = Reservation::findOrFail($id);

        return response()->json($reservation);
    }

    // Update a reservation
    public function update(Request $request, $id)
    {
        $reservation = Reservation::findOrFail($id);

        $oldStatus = $reservation->status;

        $reservation->update($request->all());

        if (
            $oldStatus !== 'confirmed' &&
            $reservation->status === 'confirmed'
        ) {
            Mail::to($reservation->email)
                ->send(new ReservationConfirmed($reservation));
        }

        return response()->json($reservation);
    }

    // Delete a reservation
    public function destroy($id)
    {
        $reservation = Reservation::findOrFail($id);

        $reservation->delete();

        return response()->json([
            'message' => 'Reservation deleted successfully',
        ]);
    }
}