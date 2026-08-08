<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Reservation Confirmed</title>
</head>
<body>

    <h1>Your reservation is confirmed!</h1>

    <p>Hello {{ $reservation->name }},</p>

    <p>
        Your reservation at DineIn has been confirmed.
    </p>

    <h3>Reservation Details</h3>

    <p>
        <strong>Date:</strong>
        {{ $reservation->date }}
    </p>

    <p>
        <strong>Time:</strong>
        {{ $reservation->time }}
    </p>

    <p>
        <strong>Guests:</strong>
        {{ $reservation->guests }}
    </p>

    @if ($reservation->requests)
        <p>
            <strong>Special Requests:</strong>
            {{ $reservation->requests }}
        </p>
    @endif

    <p>
        We look forward to seeing you!
    </p>

    <p>
        — DineIn
    </p>

</body>
</html>