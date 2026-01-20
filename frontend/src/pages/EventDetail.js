import { useParams } from "react-router-dom";

function EventDetailsPage() {
  const params = useParams();
  return (
    <>
      <h1>Event Details Page</h1>
      <p>Event ID: {params.eventId}</p>
    </>
  );
}

export default EventDetailsPage;
