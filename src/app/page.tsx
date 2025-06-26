"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // const handleViewProducts = () => {
  //   router.push("/products");
  // };

  return (
    <>
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          backgroundColor: "#fff",
          color: "#000",
        }}
      >
        <Box
          component="section"
          sx={{
            position: "relative",
            width: "100%",
            height: 520,
            overflow: "hidden",
            color: "#fff",
          }}
        >
          {/* 背景動画 */}
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          >
            <source src="/assets/background.mp4" type="video/mp4" />
          </video>

          {/* ヒーローコンテンツ */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: "bold",
                mb: 2,
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              未来を、あなたの手に。
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: "1.2rem",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              新しい製品の体験を今すぐ。
            </Typography>

            <Button
              variant="contained"
              onClick={() => router.push("/products")}
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
                px: 3,
                py: 1.5,
                borderRadius: "8px",
                textTransform: "none",
                boxShadow: "2px 2px 6px rgba(0,0,0,0.3)",
              }}
            >
              製品を見る
            </Button>
          </motion.div>
        </Box>

        <Box
          component="section"
          sx={{
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "medium", mb: 3 }}
          >
            人気の製品
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 4,
            }}
          >
            {[
              {
                src: "/assets/item1.png",
                title: "orange",
                desc: "革新的なテクノロジー搭載",
              },
              {
                src: "/assets/item2.png",
                title: "apple",
                desc: "洗練されたデザイン",
              },
              {
                src: "/assets/item3.png",
                title: "orange",
                desc: "革新的なテクノロジー搭載",
              },
              {
                src: "/assets/item4.png",
                title: "orange",
                desc: "革新的なテクノロジー搭載",
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: {
                    xs: "0 0 100%",
                    sm: "0 0 45%",
                  },
                  maxWidth: 400,
                  border: "1px solid #ccc",
                  borderRadius: 2,
                  p: 2,
                  boxShadow: 1,
                  transition: "box-shadow 0.3s",
                  "&:hover": { boxShadow: 4 },
                  textAlign: "center",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={500}
                  height={300}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
