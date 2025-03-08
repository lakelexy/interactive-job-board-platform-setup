import { useEffect, useState } from "react";

const CompanyReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      "https://jobboardbackend-production-0287.up.railway.app/api/jobs/{job_id}/applications/{application_id}/reviews"
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Company Reviews</h1>
      {reviews.map((review) => (
        <div key={review.id} className="border p-4 rounded mb-4">
          <h2 className="text-xl font-semibold">{review.company}</h2>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default CompanyReviews;
