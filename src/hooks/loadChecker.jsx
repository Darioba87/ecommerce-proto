import PacmanLoader from "react-spinners/PacmanLoader";

const css = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
export const useLoadingAndError = (loading, error) => {
  if (loading) {
    return (
      <div className="loader-wrapper">
        <PacmanLoader
          color={"#00d1b2"}
          loading={loading}
          cssOverride={css}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return null;
};
