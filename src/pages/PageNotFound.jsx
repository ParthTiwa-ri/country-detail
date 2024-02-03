import imageNotFound from "./404.png";

function PageNotFound() {
  return (
    <div style={styles.container}>
      <img src={imageNotFound} alt="404 Page Not Found" style={styles.image} />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Make container fill the entire viewport height
  },
  image: {
    width: "80%", // Make the image 80% of its container width
    height: "auto", // Maintain aspect ratio
  },
};

export default PageNotFound;
