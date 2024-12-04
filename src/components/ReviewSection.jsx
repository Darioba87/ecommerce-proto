import reviews from "../data/fake-reviews.json";
export default function ReviewSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-3 has-text-centered">What Our Customers Say</h2>
        <div className="columns is-multiline">
          {reviews.map((review) => (
            <div key={review.id} className="column is-one-third">
              <div className="box">
                <article className="media">
                  <figure className="meria-left ">
                    <p className="image is-64x64">
                      <img
                        className="is-rounded"
                        src={review.imageUrl}
                        alt={review.name}
                      />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="media-right content">
                      <p>
                        <strong>{review.name}</strong> <br />
                        <small>{review.product}</small>
                        <br />
                        {review.comment}
                      </p>
                      <p className="has-text-warning">
                        {"★".repeat(Math.floor(review.rating))}
                        {"☆".repeat(5 - Math.floor(review.rating))}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
