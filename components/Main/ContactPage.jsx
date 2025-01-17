import styled from "@emotion/styled";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = styled("section")(({ theme }) => ({
  padding: "160px 10% 90px",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  alignItems: "center",
  gap: "3rem",

  [theme.breakpoints.down("h")]: {
    padding: "130px 3% 60px ",
  },

  [theme.breakpoints.down("ms")]: {
    padding: "70px 3% 60px ",
    gridTemplateColumns: "1fr",
  },
}));

const ContactText = styled("div")({
  h4: {
    margin: "15px 0",
    background: "linear-gradient(to left, #6fb98f, greenYellow)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: "20px",
    fontWeight: "600",
  },
  h2: {
    fontSize: "3.5rem",
    color: "#2c7873",
  },
  p: {
    color: "#6fb98f",
    fontSize: "1.1rem",
    lineHeight: "30px",
    marginBottom: "2rem",
    fontFamily: "Quicksand, san-serif",
  },
});

const ContactList = styled("div")({
  marginBottom: "3rem",
});

const ContactIcons = styled("div")({
  ".i": {
    height: "40px",
    width: "40px",
    background: "#004445",
    borderRadius: "0.5rem",
    color: "#adff2f ",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    marginRight: "10px",
    transition: "all .40s ease",
  },
  ".i:hover": {
    transform: "scale(1.01) translateY(-5px)",
    color: "#fff",
    background: "linear-gradient(to left, #6fb98f, greenYellow)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
});

const A = styled("a")({
  textDecoration: "none",
});

const Li = styled("li")({
  listStyle: "none",
  marginBottom: "10px",
  display: "block",

  A: {
    display: "block",
    color: "#2c7873",
    fontSize: "1.1rem",
    fontWeight: "600",
    transition: "all .40s ease",
  },
  "A:hover": {
    transform: "scale(1.01) translateY(-5px)",
    background: "linear-gradient(to left, #6fb98f, greenYellow)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
});

const ContactForm = styled("div")({
  form: {
    position: "relative",
    "input, textarea": {
      border: "none",
      outline: "none",
      width: " 100%",
      padding: "18px",
      background: "#020312",
      color: "#fff",
      fontSize: "1rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
      borderRadius: "0.5rem",
      fontFamily: "Quicksand, san-serif",
    },
  },
  textarea: {
    resize: "none",
    height: "220px",
  },
  "form .send": {
    display: "inline-block",
    fontSize: "17px",
    fontWeight: "500",
    background: "linear-gradient(to left, #6fb98f, greenYellow)",

    width: "190px",
    transition: "all .40s ease",
    cursor: "pointer",
  },
});

const LastText = styled("div")({});

export default function ConctacPage() {
  return (
    <Contact id="contact">
      <ContactText>
        <h2>Contact</h2>
        <h4>Give us a Review</h4>
        <p>
          Tell us what do you think about this aplicacion, and if you have a
          question do not have afreid to writing us.
        </p>
        <ContactList>
          <Li>
            <A className="info" href="">
              Giancarlo Cabrera - Hamlet Pirazan
            </A>
          </Li>
          <Li>
            <A className="info" href="">
              giancarlo.cabrera@unac.edu.co - hamletj.pirazanp@unac.edu.co
            </A>
          </Li>
          <Li>
            <A className="info" href="">
              0123354 - 131231312
            </A>
          </Li>
        </ContactList>
        <ContactIcons>
          <A href="">
            <LinkedInIcon className="i" />
          </A>
          <A href="">
            <FacebookIcon className="i" />
          </A>
          <A href="">
            <InstagramIcon className="i" />
          </A>
          <A href="">
            <TwitterIcon className="i" />
          </A>
        </ContactIcons>
      </ContactText>

      <ContactForm>
        <form
          action="https://formsubmit.co/hamletcruzpirazan@gmail.com"
          method="POST"
        >
          <input type="" placeholder="Asunto" required name="asunto" />
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            name="email"
          />
          <textarea
            name="mensaje"
            id=""
            cols="40"
            rows="10"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <input type="submit" value="Submit" className="send" />

          <input
            type="hidden"
            name="_next"
            value="http://89.116.25.43:3000/dashboard/info"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      </ContactForm>
    </Contact>
  );
}
