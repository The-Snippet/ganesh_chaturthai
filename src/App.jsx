import React from "react";
import ganeshaSvg from "./assets/layer1.svg";
import dpLogoSvg from "./assets/Vector.svg";

const App = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      width:'88vw',
      backgroundColor: "#000000",
      color: "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem 1.5rem",
      fontFamily: "Arial, sans-serif",
    },
    ganeshaContainer: {
      marginBottom: "2rem",
    },
    ganeshaImg: {
      width: "15rem",
      height: "15rem",
    },
    sanskritText: {
      textAlign: "center",
      marginBottom: "2rem",
      lineHeight: "1",
      fontFamily: "Inter",
    },
    sanskritLine: {
      fontSize: "18px",
      fontWeight: "300",
      letterSpacing: "0.05em",
      margin: "0.5rem 0",
    },
    dpContainer: {
      marginBottom: "3rem",
    },
    dpImg: {
      width: "4rem",
      height: "4rem",
    },
    descriptionContainer: {
      textAlign: "center",
      maxWidth: "20rem",
      lineHeight: "1.4",
    },
    descriptionLine: {
      fontSize: "0.875rem",
      color: "#d1d5db",
      margin: "1rem 0",
    },
    snippetLine: {
      fontSize: "0.875rem",
      margin: "1rem 0",
    },
    snippetLink: {
      color: "#60a5fa",
      textDecoration: "underline",
    },
    snippetText: {
      color: "#d1d5db",
    },
    tamilContainer: {
      marginTop: "4rem",
      textAlign: "center",
    },
    tamilText: {
      fontSize: "0.75rem",
      color: "#9ca3af",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.container}>
      {/* Ganesha Symbol */}
      <div style={styles.ganeshaContainer}>
        <img src={ganeshaSvg} alt="Ganesha" style={styles.ganeshaImg} />
      </div>

      {/* Sanskrit Text */}
      <div style={styles.sanskritText}>
        <p style={styles.sanskritLine}>Vakratunda Mahakaya Suryakoti</p>
        <p style={styles.sanskritLine}>Samaprabha, Nirvighnam Kurume</p>
        <p style={styles.sanskritLine}>Deva Sarva-Kaaryeshu Sarvada</p>
      </div>

      {/* DP Logo */}
      <div style={styles.dpContainer}>
        <img src={dpLogoSvg} alt="DP Logo" style={styles.dpImg} />
      </div>

      {/* Description Text */}
      <div style={styles.descriptionContainer}>
        College life's messy posters on walls, WhatsApp spam, Instagram
        overload. Snippet fixes it. Find events, stalk your crush anonymously,
        and maybe even save a life. All in one app, without your brain rotting
        on reels.
      </div>

      {/* Tamil Text at Bottom */}
      <div style={styles.tamilContainer}>
        <p style={styles.tamilText}>
          யாமறிந்த மொழிகளிலே தமிழ்மொழி போல்
          <br />
          இனிதாவது எங்கும் காணோம்
        </p>
      </div>
    </div>
  );
};

export default App;
