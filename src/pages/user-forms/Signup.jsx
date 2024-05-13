import React, { useState, useContext } from "react";
import Grid from "@mui/material/Grid";
// import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSnackbar } from "notistack";
import PulseLoader from "react-spinners/PulseLoader";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { handlePostData } from "../../services/PostDataService";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Box } from "@mui/material";
import axios from "axios";
import { styled, useTheme } from "@mui/material/styles";

const Signup = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(true);
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const customeTextFeild = {
    // padding: "15px 20px",
    background: "#FAFAFA",
    borderRadius: "12px",

    "& label.Mui-focused": {
      color: "#A0AAB4",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-input": {
      padding: "15px 24px 15px 0px",
    },
    "& .MuiOutlinedInput-root": {
      paddingLeft: "24px",
      "& fieldset": {
        borderColor: "rgba(0,0,0,0)",
      },

      "&:hover fieldset": {
        borderColor: "#969696",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#969696",
      },
    },
  };

  const validation = () => {
    let isError = false;
    if (!email.trim()) {
      handleSnakbarOpen("Please enter email address", "error");
      document.getElementById("email").focus();
      return (isError = true);
    } else if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email.trim()
      )
    ) {
      handleSnakbarOpen("Invalid email address", "error");
      document.getElementById("email").focus();
      return (isError = true);
    }

    if (!password.trim()) {
      handleSnakbarOpen("Please enter password", "error");
      document.getElementById("password").focus();
      return (isError = true);
    }
    return isError;
  };

  const handleSnakbarOpen = (msg, vrnt) => {
    let duration;
    if (vrnt === "error") {
      duration = 3000;
    } else {
      duration = 1000;
    }
    enqueueSnackbar(msg, {
      variant: vrnt,
      autoHideDuration: duration,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (e) => {
    navigate("/");
    return;
    e.preventDefault();

    let err = validation();
    if (err) {
      return;
    } else {
      setLoading(true);
      try {
        let url = `/api/v1/public/auth/admin/signin`;
        let data = {
          email: email.trim(),
          password: password.trim(),
          grant_type: process.env.REACT_APP_GRANT_TYPE,
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRECT,
          scope: process.env.REACT_APP_SCOPE,
        };
        // let res = await handlePostData(url, data);
        let res = await axios({
          url: url,
          method: "post",
          data: data,
        });

        console.log("res.data.data", res.data.data);
        if (res?.status > 199 && res?.status < 300) {
          handleSnakbarOpen("Successfull", "success");
          login({
            email: email.trim(),
            password: password.trim(),
            ...res.data.data,
          });
          if (res.data.data.password_change_required) {
            console.log(
              "res.data.data.password_change_required iffffffffffffffffffffffffff"
            );
            navigate("/reset-password");
          } else {
            navigate("/otp");
            console.log(
              "res.data.data.password_change_required elseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
            );
          }
        }
        setLoading(false);

        // login(data);
        // setLoading(false);
        // navigate("/dashboard");
      } catch (error) {
        setLoading(false);
        console.log("catch error", error);
        if (error?.response?.status === 500) {
          handleSnakbarOpen(error?.response?.statusText, "error");
        } else {
          handleSnakbarOpen(error?.response?.data?.message, "error");
          setErrors(error.response.data.errors);
        }
      }
    }
  };

  const iconHolder = {
    width: "44px",
    height: "44px",
    background: "#fafafa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
  };
  return (
    <React.Fragment>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        {/* <Grid
          container
          justifyContent="center"
          alignItems="center"
          // className={classes.main}
          sx={{
            width: "1100px !important",
            padding: "10px 30px",
            background: "#fff",
            borderRadius: "10px",
            textAlign: "center",
          }}
        > */}
        {/* <Grid item xs={6}>
            <img
              src="/image/login.jpg"
              alt=""
              style={{ display: "block", margin: "auto", maxWidth: "100%" }}
            />
          </Grid> */}
        {/* <Grid item xs={6}> */}
        <form
          // className={classes.formStyle}
          onSubmit={onSubmit}
          style={{
            width: "400px",
            // padding: "50px",
            // padding: "40px 60px",
            // background: "#fff",
            // borderRadius: "10px",
            textAlign: "center",
            // border: `1px solid #E5E5E5`,
            boxSizing: "border-box",
          }}
        >
          <img
            src="/logo_small.png"
            alt=""
            style={{
              display: "block",
              margin: "auto",
              maxWidth: "60px",
              marginBottom: "32px",
            }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: 500, mb: 4, color: "#222", mb: 4 }}
          >
            Create an Account
          </Typography>
          <Box sx={{ mb: 2 }}>
            <TextField
              sx={{ ...customeTextFeild }}
              placeholder="Name"
              fullWidth
              // size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 12.5C14.7614 12.5 17 10.2614 17 7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5C7 10.2614 9.23858 12.5 12 12.5Z"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.59 22.5C20.59 18.63 16.74 15.5 12 15.5C7.26003 15.5 3.41003 18.63 3.41003 22.5"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{" "}
            {errors?.name && (
              <Typography
                variant="small"
                color="error.main"
                sx={{ textAlign: "left" }}
              >
                {errors.email.toString()}
              </Typography>
            )}
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              sx={{ ...customeTextFeild }}
              placeholder="Email"
              fullWidth
              // size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            {errors?.email && (
              <Typography
                variant="small"
                color="error.main"
                sx={{ textAlign: "left" }}
              >
                {errors.email.toString()}
              </Typography>
            )}
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormControl
              fullWidth
              variant="outlined"
              sx={{ ...customeTextFeild }}
            >
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                // size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.9965 16H16.0054"
                        stroke="#969696"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.9955 16H12.0045"
                        stroke="#969696"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.99451 16H8.00349"
                        stroke="#969696"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ mr: 0.5 }}
                    >
                      {showPassword ? (
                        <VisibilityOffOutlinedIcon sx={{ color: "#969696" }} />
                      ) : (
                        <RemoveRedEyeOutlinedIcon sx={{ color: "#969696" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {errors?.password && (
              <Typography
                variant="small"
                color="error.main"
                sx={{ textAlign: "left" }}
              >
                {errors.password.toString()}
              </Typography>
            )}
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormControl
              fullWidth
              variant="outlined"
              sx={{ ...customeTextFeild }}
            >
              <OutlinedInput
                type={confirmPasswordShow ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm Password"
                // size="small"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.9965 16H16.0054"
                        stroke="#969696"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.9955 16H12.0045"
                        stroke="#969696"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.99451 16H8.00349"
                        stroke="#969696"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setConfirmPasswordShow(!confirmPasswordShow)
                      }
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ mr: 0.5 }}
                    >
                      {confirmPasswordShow ? (
                        <VisibilityOffOutlinedIcon sx={{ color: "#969696" }} />
                      ) : (
                        <RemoveRedEyeOutlinedIcon sx={{ color: "#969696" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {errors?.password && (
              <Typography
                variant="small"
                color="error.main"
                sx={{ textAlign: "left" }}
              >
                {errors.password.toString()}
              </Typography>
            )}
          </Box>

          {/* <Grid container alignItems="center" sx={{ mb: 4 }}>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      sx={{
                        color: "#969696",
                        // "&.Mui-checked": {
                        //   color: "red",
                        // },
                      }}
                    />
                  }
                  label="Remember me"
                  sx={{
                    ".MuiTypography-root": {
                      color: "#969696",
                      fontWeight: 500,
                      fontSize: "16px",
                    },
                  }}
                />
              </FormGroup>
            </Grid>
          </Grid> */}

          <Button
            variant="contained"
            disableElevation
            fullWidth
            sx={{ minHeight: "56px", mb: 3, mt: 2, borderRadius: "10px" }}
            disabled={loading}
            type="submit"
          >
            {loading === false && "Continue"}
            <PulseLoader
              color={"#353b48"}
              loading={loading}
              size={10}
              speedMultiplier={0.5}
            />{" "}
          </Button>

          <Typography
            component="div"
            color="text.light"
            sx={{
              fontSize: "14px",
              textAlign: "center",
              cursor: "pointer",
              mb: 3,
            }}
          >
            Login with social
          </Typography>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{ gap: "12px", mb: 3 }}
          >
            <Grid item sx={{ ...iconHolder }}>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="44"
                  height="44"
                  rx="8"
                  fill="#FAFAFA"
                />
                <path
                  d="M24.363 34.4957V23.5677H28.0497L28.5977 19.2891H24.363V16.5637C24.363 15.3291 24.707 14.4837 26.479 14.4837H28.7244V10.6691C27.6319 10.552 26.5338 10.4955 25.435 10.4997C22.1764 10.4997 19.939 12.4891 19.939 16.1411V19.2811H16.2764V23.5597H19.947V34.4957H24.363Z"
                  fill="#1976D2"
                />
              </svg>
            </Grid>
            <Grid item sx={{ ...iconHolder }}>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="44"
                  height="44"
                  rx="8"
                  fill="#FAFAFA"
                />
                <path
                  d="M25.088 20.356L35.214 8.5H32.814L24.024 18.794L17 8.5H8.89999L19.52 24.068L8.89999 36.5H11.3L20.584 25.628L28.002 36.5H36.102L25.088 20.356ZM21.802 24.204L20.726 22.654L12.164 10.32H15.85L22.758 20.274L23.834 21.824L32.816 34.764H29.13L21.802 24.204Z"
                  fill="#3C4244"
                />
              </svg>
            </Grid>
            <Grid item sx={{ ...iconHolder }}>
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.125 16.5002C10.125 15.3111 10.4526 14.1972 11.0218 13.2434V9.19775H6.97608C5.37038 11.2831 4.5 13.8246 4.5 16.5002C4.5 19.1757 5.37038 21.7172 6.97608 23.8026H11.0218V19.7569C10.4526 18.8031 10.125 17.6893 10.125 16.5002Z"
                  fill="#FBBB00"
                />
                <path
                  d="M16.5 22.8749L13.6875 25.6874L16.5 28.4999C19.1756 28.4999 21.717 27.6295 23.8024 26.0238V21.9824H19.761C18.7989 22.5536 17.6804 22.8749 16.5 22.8749Z"
                  fill="#28B446"
                />
                <path
                  d="M11.0223 19.7568L6.97656 23.8025C7.29447 24.2154 7.64064 24.6108 8.01522 24.9854C10.2817 27.2519 13.2952 28.5001 16.5005 28.5001V22.8751C14.1744 22.8751 12.1356 21.6226 11.0223 19.7568Z"
                  fill="#28B446"
                />
                <path
                  d="M28.5 16.4999C28.5 15.7699 28.4339 15.0384 28.3035 14.326L28.198 13.7495H16.5V19.3745H22.1931C21.6402 20.4742 20.7902 21.3715 19.761 21.9825L23.8024 26.0239C24.2153 25.706 24.6106 25.3598 24.9853 24.9853C27.2518 22.7187 28.5 19.7053 28.5 16.4999Z"
                  fill="#518EF8"
                />
                <path
                  d="M21.0078 11.9922L21.505 12.4893L25.4825 8.51189L24.9853 8.01473C22.7188 5.74823 19.7054 4.5 16.5 4.5L13.6875 7.3125L16.5 10.125C18.2028 10.125 19.8037 10.7881 21.0078 11.9922Z"
                  fill="#F14336"
                />
                <path
                  d="M16.5005 10.125V4.5C13.2952 4.5 10.2818 5.74823 8.01522 8.01469C7.64064 8.38927 7.29447 8.78466 6.97656 9.19758L11.0223 13.2433C12.1357 11.3775 14.1744 10.125 16.5005 10.125Z"
                  fill="#F14336"
                />
              </svg>
            </Grid>
            <Grid item sx={{ ...iconHolder }}>
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.119 4.5C21.1748 4.5 21.2307 4.5 21.2897 4.5C21.4267 6.19253 20.7807 7.45719 19.9956 8.37301C19.2252 9.28251 18.1702 10.1646 16.464 10.0308C16.3502 8.36247 16.9973 7.19161 17.7814 6.27789C18.5085 5.42636 19.8417 4.66862 21.119 4.5Z"
                  fill="#242424"
                />
                <path
                  d="M26.284 22.1166C26.284 22.1335 26.284 22.1482 26.284 22.1641C25.8045 23.6163 25.1205 24.8609 24.2858 26.016C23.5239 27.0646 22.5901 28.4757 20.9229 28.4757C19.4823 28.4757 18.5253 27.5494 17.0488 27.5241C15.487 27.4988 14.6281 28.2987 13.2001 28.5C13.0367 28.5 12.8734 28.5 12.7132 28.5C11.6646 28.3482 10.8183 27.5178 10.2018 26.7695C8.38385 24.5585 6.97903 21.7025 6.71767 18.0476C6.71767 17.6893 6.71767 17.332 6.71767 16.9737C6.82832 14.358 8.0993 12.2312 9.78867 11.2005C10.6803 10.6525 11.9059 10.1857 13.2707 10.3943C13.8556 10.485 14.4531 10.6852 14.9769 10.8833C15.4733 11.0741 16.094 11.4124 16.6821 11.3945C17.0805 11.3829 17.4767 11.1752 17.8783 11.0288C19.0544 10.604 20.2073 10.1172 21.727 10.3458C23.5534 10.622 24.8497 11.4335 25.6506 12.6855C24.1056 13.6687 22.8842 15.1505 23.0928 17.6808C23.2783 19.9794 24.6147 21.3241 26.284 22.1166Z"
                  fill="#242424"
                />
              </svg>
            </Grid>
          </Grid>

          <Typography
            component="div"
            color="text.light"
            sx={{
              fontSize: "14px",
              textAlign: "center",
              cursor: "pointer",
              mb: 3,
              fontWeight: 500,
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#10A37F" }}
            >
              Login
            </Link>
          </Typography>
        </form>
        {/* </Grid> */}
        {/* </Grid> */}
      </Grid>
    </React.Fragment>
  );
};

export default Signup;
