"use client";

import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import Gif from "../public/images/Gif.gif";
import { useDispatch } from "react-redux";
import { signIn, useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { loginUserAction } from "../app/GlobalRedux/Features/login/login";
import Image from "next/image";
import { useRouter } from "next/navigation";

const H1 = styled("h1")({
  fontWeight: 700,
  letterSpacing: "-1.5px",
  margin: 0,
  marginBottom: "15px",
  color: "black",
});

const Title = styled("h1")({
  fontSize: "45px",
  lineHeight: "45px",
  margin: 0,
  textShadow: "0 0 10px rgba(16, 64, 74, 0.5)",
});

const Paragraph = styled("p")({
  fontSize: "14px",
  fontWeight: 100,
  lineHeight: "20px",
  letterSpacing: "0.5px",
  margin: "20px 0 30px",
  textShadow: "0 0 10px rgba(16, 64, 74, 0.5)",
});

const Span = styled("span")({
  fontSize: "14px",
  marginTop: "25px",
});

const Link = styled("a")({
  color: "#333",
  fontsize: "14px",
  textDecoration: "none",
  margin: "15px 0",
  transition: "0.3s ease-in-out",
  ":hover": {
    color: "#4bb6b7",
  },
});

const Button = styled("button")({
  position: "relative",
  borderRadius: "20px",
  border: "1px solid #4bb6b7",
  backgroundColor: "#4bb6b7",
  color: "#fff",
  fontSize: "15px",
  fontWeight: 700,
  margin: "10px",
  padding: "12px 80px",
  letterSpacing: "1px",
  textTransform: "capitalize",
  transition: "0.3s ease-in-out",
  ":hover": {
    letterSpacing: "3px",
  },
  ":active": {
    transform: "scale(0.95)",
  },
  ":focus": {
    outline: "none",
  },
  ".ghost": {
    backgroundColor: "rgba(225, 225, 225, 0.2)",
    border: "2px solid #fff",
    color: "#fff",
    i: {
      position: "absolute",
      opacity: 0,
      transition: "0.3s ease-in-out",
    },
  },
});

const Form = styled("form")({
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "0 50px",
  height: "100%",
  textAlign: "center",
});

const Input = styled("input")({
  backgroundColor: "#eee",
  borderRadius: "10px",
  border: "none",
  padding: "12px 15px",
  margin: "8px 0",
  width: "100%",
});

const Container = styled("div")({
  backgroundColor: "#fff",
  borderRadius: "25px",
  boxShadow: "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
  position: "relative",
  overflow: "hidden",
  width: "768px",
  maxWidth: "100%",
  minHeight: "500px",
});

const FormContainerLogin = styled("div")({
  position: "absolute",
  top: 0,
  height: "100%",
  transition: "all 0.6s ease-in-out",
  left: 0,
  width: "50%",
  zIndex: 2,
});

const FormContainerRegister = styled("div")({
  position: "absolute",
  top: 0,
  height: "100%",
  transition: "all 0.6s ease-in-out",
  left: 0,
  width: "50%",
  opacity: 0,
  zIndex: 1,
});

const OverlayContainer = styled("div")({
  position: "absolute",
  top: 0,
  left: "50%",
  width: "50%",
  height: "100%",
  overflow: "hidden",
  transition: "transform 0.6s ease-in-out",
  zIndex: 100,
});

const Overlay = styled("div")({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "0 0",
  color: "#fff",
  position: "relative",
  left: "-100%",
  height: "100%",
  width: "200%",
  transform: "translateX(0)",
  transition: "transform 0.6s ease-in-out",
  ":before": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background:
      "linear-gradient(to top, rgba(46, 94, 109, 0.4) 40%, rgba(46, 94, 109, 0))",
  },
});

const OverlayPanelLeft = styled("div")({
  padding: "0px 50px",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  top: 0,
  height: "100%",
  width: "50%",
  transform: "translateX(0)",
  transition: "transform 0.6s ease-in-out",
  transform: "translateX(-20%)",
});

const OverlayPanelRight = styled("div")({
  padding: "0px 50px",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  top: 0,
  height: "100%",
  width: "50%",
  transform: "translateX(0)",
  transition: "transform 0.6s ease-in-out",
  right: 0,
  transform: "translateX(0)",
});

export default function LoginCard() {
  const [loginRegis, setLoginRegis] = useState(true);
  const router = useRouter();
  const session = useSession();
  const dispatch = useDispatch();
  // Login Form
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // Login Register
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    console.log(loginForm);
  }, [loginForm]);

  useEffect(() => {
    console.log(session);
  }, [session]);

  const handleLoginChange = ({ target }) => {
    setLoginForm((val) => ({ ...val, [target.name]: target.value }));
  };

  const handleRegisterChange = ({ target }) => {
    setRegisterForm((val) => ({ ...val, [target.name]: target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      !registerForm.name ||
      !registerForm.email ||
      !registerForm.password ||
      !registerForm.confirmPassword
    ) {
      return Swal.fire({
        title: "Error!",
        text: "Data not provided...",
        icon: "error",
      });
    }
    if (registerForm.password !== registerForm.confirmPassword) {
      return Swal.fire({
        title: "Error!",
        text: "Passwords are not the same...",
        icon: "error",
      });
    }
    const res = await fetch("http://localhost:3001/api/auth/newUser", {
      method: "POST",
      body: JSON.stringify({
        name: registerForm.name,
        email: registerForm.email,
        password: registerForm.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const user = await res.json();
    console.log(user);
    if (!user.ok) {
      Swal.fire({
        title: "Error!",
        text: user.msg || "There are some fields not completed",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Registered!",
        text: "You have been registered successfully",
        icon: "success",
        showConfirmButton: false,
      });
      setLoginRegis(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      return Swal.fire({
        title: "Error!",
        text: "Credentials not provided...",
        icon: "error",
      });
    }
    const user = await signIn("credentials", {
      email: loginForm.email,
      password: loginForm.password,
      redirect: false,
    });
    console.log("user: ", user);
    if (!user.ok) {
      Swal.fire({
        title: "Error!",
        text: "User not found...",
        icon: "error",
      });
    } else {
      dispatch(loginUserAction({ email: loginForm.email }));
      router.push("/dashboard");
    }
  };

  return (
    <Container>
      <FormContainerRegister
        style={
          !loginRegis
            ? {
                transform: "translateX(100%)",
                opacity: 1,
                zIndex: 5,
                animation: "show 0.6s",
              }
            : null
        }
      >
        <Form>
          <H1>Register here</H1>
          <Input
            required
            type="text"
            name="name"
            placeholder="Name"
            value={registerForm.name}
            onChange={handleRegisterChange}
          />
          <Input
            required
            type="email"
            name="email"
            placeholder="Email"
            value={registerForm.email}
            onChange={handleRegisterChange}
          />
          <Input
            required
            type="password"
            name="password"
            placeholder="Password"
            value={registerForm.password}
            onChange={handleRegisterChange}
          />
          <Input
            required
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={registerForm.confirmPassword}
            onChange={handleRegisterChange}
          />
          <Button type="submit" onClick={handleRegister}>
            Register
          </Button>
        </Form>
      </FormContainerRegister>

      <FormContainerLogin
        style={!loginRegis ? { transform: "translateX(100%)" } : null}
      >
        <Form>
          <H1>Login here</H1>
          <Input
            required
            type="email"
            name="email"
            placeholder="Email"
            value={loginForm.email}
            onChange={handleLoginChange}
          />
          <Input
            required
            type="password"
            name="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={handleLoginChange}
          />
          <Button type="submit" onClick={handleLogin}>
            Login
          </Button>
        </Form>
      </FormContainerLogin>

      <OverlayContainer
        style={
          !loginRegis
            ? {
                backgroundColor: "black",
                transform: "translateX(-100%)",
              }
            : {
                backgroundColor: "black",
              }
        }
      >
        <Overlay
          style={
            !loginRegis
              ? {
                  transform: "translateX(50%)",
                }
              : null
          }
        >
          <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={Gif}
            priority
            alt="gif"
          />
          <OverlayPanelLeft
            style={
              !loginRegis
                ? {
                    transform: "translateX(0)",
                  }
                : null
            }
          >
            <Title>Hello friends</Title>
            <Paragraph>
              if Yout have an account, login here and have fun
            </Paragraph>
            <Button
              className="ghost"
              id="login"
              onClick={() => setLoginRegis(true)}
            >
              Login
              <i className="lni lni-arrow-left login"></i>
            </Button>
          </OverlayPanelLeft>
          <OverlayPanelRight
            style={
              !loginRegis
                ? {
                    transform: "translateX(20%)",
                  }
                : null
            }
          >
            <Title>Start your journey now</Title>
            <Paragraph>
              if you dont have an account yet, join us and start your journey.
            </Paragraph>
            <Button
              className="ghost"
              id="register"
              onClick={() => setLoginRegis(false)}
            >
              Register
              <i className="lni lni-arrow-right register"></i>
            </Button>
          </OverlayPanelRight>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
}
