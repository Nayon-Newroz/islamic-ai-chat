import React, { useState } from "react";
import {
  Avatar,
  Box,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";

const Chat = () => {
  const [isFirstQuestion, setIsFirstQuestion] = useState(true);
  const cardStyle = {
    background: "#FAFAFA",
    borderRadius: "16px",
    maxWidth: "260px",
    // Padding: "10px 21px",
    // boxSixing: "border-box",

    padding: "21px 25px",
    boxSizing: "border-box",
  };
  const customeTextFeild = {
    // padding: "15px 20px",
    // background: "#FAFAFA",
    borderRadius: "12px",
    "& label.Mui-focused": {
      color: "#A0AAB4",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-input": {
      padding: "15px 24px 15px 0px",
      color: "#595959",
      fontSize: "16px",
    },
    "& .MuiOutlinedInput-root": {
      paddingLeft: "24px",
      borderRadius: "12px",
      "& fieldset": {
        borderColor: "#E5E5E5",
      },

      "&:hover fieldset": {
        borderColor: "#969696",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#969696",
      },
    },
  };

  const listStyle = {
    color: "#555",
  };
  return (
    <Container maxWidth="md">
      <Grid
        container
        justifyContent={isFirstQuestion ? "center" : "end"}
        direction="column"
        sx={{ height: "Calc(100vh - 84px)", width: "100%" }}
      >
        <div>
          {isFirstQuestion ? (
            <>
              <Typography
                color="text.light"
                sx={{ fontSize: "36px", textAlign: "center", mb: 1.75 }}
              >
                How can I help you?
              </Typography>
              <Typography
                color="text.light"
                variant="medium"
                sx={{ maxWidth: "500px", textAlign: "center", margin: "auto" }}
              >
                I’m a next-generation AI assistant built for Islamic content to
                be a good Muslim, lifestyle, and knowledgeable.
              </Typography>
              <Typography
                color="text.light"
                variant="medium"
                sx={{
                  maxWidth: "500px",
                  textAlign: "center",
                  margin: "auto",
                  mb: 4,
                }}
              >
                I’d love for us to get to know each other better in our
                community.
              </Typography>
              <Grid container justifyContent="space-between" sx={{ mb: 6 }}>
                <Box sx={{ ...cardStyle }}>
                  What is the concept of Jihad in Islam, and how is it
                  understood and practiced by Muslims?
                </Box>

                <Box sx={{ ...cardStyle }}>
                  What is the significance of the Quran in Islam, and how is it
                  different from other religious texts?
                </Box>

                <Box sx={{ ...cardStyle }}>
                  What are the major differences between Sunni and Shia Islam,
                  and what historical events led to their divergence?
                </Box>
              </Grid>
            </>
          ) : (
            <Box
              className="chatBox"
              sx={{ height: "Calc(100vh - 140px)", overflow: "auto" }}
            >
              <Grid container sx={{ mb: 5 }}>
                <Grid item sx={{ width: "52px" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/user22.png"
                    sx={{ width: 40, height: 40 }}
                  />
                </Grid>
                <Grid item sx={{ width: "Calc(100% - 52px)" }}>
                  <Typography color="text.fade" variant="base">
                    Saad Kabir
                  </Typography>
                  <Typography color="text.light" variant="base">
                    What are the Five Pillars of Islam, and why are they
                    important?
                  </Typography>
                </Grid>
              </Grid>
              <Grid container sx={{ mb: 5 }}>
                <Grid item sx={{ width: "52px" }}>
                  {/* <Avatar
                    alt="Remy Sharp"
                    src="/logo_small.png"
                    sx={{ width: 40, height: 40 }}
                  /> */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="39"
                      height="39"
                      rx="19.5"
                      fill="white"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="39"
                      height="39"
                      rx="19.5"
                      stroke="#D2D2D2"
                    />
                    <g clip-path="url(#clip0_58_574)">
                      <path
                        d="M20.4568 9.03399C20.5617 9.03399 20.6665 9.03399 20.7714 9.05627C20.4836 8.72911 20.2261 8.37551 20.0022 8C19.6914 8.50516 19.3296 8.9757 18.9226 9.4039C19.3997 9.16313 19.9244 9.0366 20.4568 9.03399Z"
                        fill="#02B45E"
                      />
                      <path
                        d="M9.35496 30.244C9.35581 29.774 9.53041 29.3217 9.84395 28.9772C10.1575 28.6327 10.5869 28.4214 11.0464 28.3855C10.945 28.1619 10.8914 27.9188 10.8891 27.6724C10.8904 27.4132 10.9503 27.1578 11.064 26.9259C11.1777 26.6941 11.3422 26.492 11.5447 26.3354C11.3194 25.0886 11.4718 23.8014 11.9818 22.6451C13.293 19.5699 15.9155 19.2357 17.6638 18.0056C18.446 17.4693 19.1457 16.8174 19.74 16.0713C19.1956 15.9579 18.6859 15.7129 18.2537 15.3569C17.8215 15.0009 17.4795 14.5443 17.2563 14.0254C17.0332 13.5066 16.9355 12.9407 16.9714 12.3754C17.0073 11.81 17.1758 11.2617 17.4628 10.7766C17.2005 10.9861 16.9208 11.2 16.5886 11.4184C14.1628 13.1164 10.522 13.58 8.72119 17.8273C8.26315 18.8445 8.00833 19.9446 7.97156 21.0633C7.93479 22.182 8.11681 23.297 8.50702 24.3432C8.11561 25.3891 7.93294 26.5043 7.96972 27.6231C8.00649 28.742 8.26197 29.8422 8.72119 30.8591C8.90619 31.2625 9.11794 31.6526 9.35496 32.0267V30.244Z"
                        fill="#1FA6F1"
                      />
                      <path
                        d="M31.2483 17.8095C29.4431 13.5621 25.7979 13.0986 23.3809 11.4006C22.4285 10.7425 21.562 9.96372 20.8021 9.08301C20.3672 9.19488 19.9622 9.40427 19.6167 9.69592C19.2712 9.98757 18.9938 10.3541 18.8048 10.7689C18.6157 11.1837 18.5199 11.6362 18.5241 12.0936C18.5283 12.5509 18.6324 13.0016 18.829 13.4127C19.0256 13.8238 19.3097 14.185 19.6605 14.47C20.0113 14.755 20.4201 14.9566 20.857 15.0602C21.2939 15.1637 21.7479 15.1666 22.186 15.0686C22.6242 14.9706 23.0353 14.7741 23.3896 14.4936C23.0832 14.9805 22.6644 15.3834 22.1699 15.667C21.6753 15.9506 21.1201 16.1063 20.5529 16.1203C21.1367 16.8364 21.8165 17.465 22.5722 17.9877C24.3206 19.2178 26.9693 19.5521 28.2805 22.6273C28.7905 23.7835 28.9429 25.0708 28.7176 26.3175C28.9194 26.4749 29.0834 26.6771 29.197 26.9088C29.3106 27.1405 29.3709 27.3956 29.3732 27.6546C29.3715 27.9015 29.3162 28.145 29.2115 28.3677C29.6741 28.4038 30.1059 28.6176 30.4199 28.9659C30.7339 29.3141 30.9065 29.771 30.903 30.244C30.903 30.2708 30.903 30.2975 30.903 30.3198V31.5811C31.0253 31.3493 31.1434 31.0997 31.257 30.8412C31.7162 29.8243 31.9717 28.7242 32.0085 27.6053C32.0453 26.4864 31.8626 25.3713 31.4712 24.3253C31.8612 23.2788 32.0424 22.1634 32.0041 21.0445C31.9659 19.9256 31.7089 18.8258 31.2483 17.8095Z"
                        fill="#10A37F"
                      />
                      <path
                        d="M25.4962 23.3716C24.6221 21.3437 22.9 21.1431 21.7417 20.3142C21.1009 19.8933 20.5531 19.3407 20.1333 18.6919C19.711 19.3401 19.1619 19.8924 18.5205 20.3142C17.3622 21.1253 15.627 21.3437 14.766 23.3716C14.5068 23.9257 14.3804 24.5346 14.3971 25.1483C14.4138 25.7619 14.5732 26.3628 14.8621 26.9014C14.8621 26.9014 16.405 27.6947 20.1464 27.6947C23.8878 27.6947 25.3913 26.9014 25.3913 26.9014C25.6816 26.3635 25.8425 25.763 25.8608 25.1493C25.879 24.5357 25.7541 23.9264 25.4962 23.3716Z"
                        fill="#10A37F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_58_574">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(8 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Grid>
                <Grid item sx={{ width: "Calc(100% - 52px)" }}>
                  <Typography color="text.fade" variant="base">
                    Islamic AI
                  </Typography>
                  <Typography color="text.light" variant="base">
                    The Five Pillars of Islam are the fundamental acts of
                    worship and obedience that Muslims uphold as central to
                    their faith. They are:
                  </Typography>
                  <ol style={{ ...listStyle }}>
                    <li>
                      Shahada (Faith): The declaration of faith, which states,
                      "There is no god but Allah, and Muhammad is the messenger
                      of Allah." This proclamation is the cornerstone of Islamic
                      belief and serves as a testament to the oneness of God and
                      the prophethood of Muhammad.
                    </li>
                    <li>
                      Salah (Prayer): Muslims are required to perform five daily
                      prayers, known as Salah, at specific times throughout the
                      day. These prayers are a means of maintaining a spiritual
                      connection with Allah and seeking His guidance and
                      forgiveness.
                    </li>
                    <li>
                      Zakat (Charity): Zakat is the obligation for Muslims to
                      give a portion of their wealth to those in need, typically
                      calculated as 2.5% of one's savings and assets. It serves
                      as a means of purifying one's wealth and supporting the
                      less fortunate members of the community.
                    </li>
                    <li>
                      Sawm (Fasting): During the month of Ramadan, Muslims fast
                      from dawn until sunset, abstaining from food, drink, and
                      other physical needs. Fasting in Ramadan is not only an
                      act of self-discipline but also a spiritual practice aimed
                      at cultivating empathy for the less fortunate and
                      increasing one's devotion to Allah.
                    </li>
                    <li>
                      Hajj (Pilgrimage): Hajj is the pilgrimage to the holy city
                      of Mecca in Saudi Arabia, which every Muslim who is
                      physically and financially able is required to undertake
                      at least once in their lifetime. It commemorates the
                      actions of the Prophet Abraham and serves as a symbol of
                      unity among Muslims worldwide.
                    </li>
                  </ol>
                  <ol style={{ ...listStyle }}>
                    <li>
                      Shahada (Faith): The declaration of faith, which states,
                      "There is no god but Allah, and Muhammad is the messenger
                      of Allah." This proclamation is the cornerstone of Islamic
                      belief and serves as a testament to the oneness of God and
                      the prophethood of Muhammad.
                    </li>
                    <li>
                      Salah (Prayer): Muslims are required to perform five daily
                      prayers, known as Salah, at specific times throughout the
                      day. These prayers are a means of maintaining a spiritual
                      connection with Allah and seeking His guidance and
                      forgiveness.
                    </li>
                    <li>
                      Zakat (Charity): Zakat is the obligation for Muslims to
                      give a portion of their wealth to those in need, typically
                      calculated as 2.5% of one's savings and assets. It serves
                      as a means of purifying one's wealth and supporting the
                      less fortunate members of the community.
                    </li>
                    <li>
                      Sawm (Fasting): During the month of Ramadan, Muslims fast
                      from dawn until sunset, abstaining from food, drink, and
                      other physical needs. Fasting in Ramadan is not only an
                      act of self-discipline but also a spiritual practice aimed
                      at cultivating empathy for the less fortunate and
                      increasing one's devotion to Allah.
                    </li>
                    <li>
                      Hajj (Pilgrimage): Hajj is the pilgrimage to the holy city
                      of Mecca in Saudi Arabia, which every Muslim who is
                      physically and financially able is required to undertake
                      at least once in their lifetime. It commemorates the
                      actions of the Prophet Abraham and serves as a symbol of
                      unity among Muslims worldwide.
                    </li>
                  </ol>
                </Grid>
              </Grid>
            </Box>
          )}

          <FormControl
            fullWidth
            variant="outlined"
            sx={{ ...customeTextFeild }}
          >
            <OutlinedInput
              id="password"
              placeholder="Massage to Ask your Question"
              // size="small"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}

              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setIsFirstQuestion(false)}
                    //   onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{ mr: 0.5 }}
                  >
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4301 6.42969L20.5001 12.4997L14.4301 18.5697"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.5 12.5H20.33"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </Grid>
    </Container>
  );
};

export default Chat;
