"use client";

import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navItems = [
  {
    icon: <SearchIcon />,
    path: "/search",
    label: "検索",
  },
  {
    icon: <BusinessIcon />,
    path: "/about",
    label: "企業情報",
  },
  {
    icon: <PersonIcon />,
    path: "/login",
    label: "ログイン",
  },
];

export const Header: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: "#000",
        boxShadow: "none",
        paddingX: 2,
      }}
    >
      <Toolbar className="flex justify-between">
        <Box
          onClick={() => handleNavigation("/")}
          sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <Image
            src="/assets/headerLogo.png"
            alt="MyStore Logo"
            width={25}
            height={30}
            style={{ objectFit: "contain" }}
          />
        </Box>

        <Box className="flex gap-6 items-center">
          {navItems.map((item, index) => (
            <IconButton
              key={index}
              color="inherit"
              onClick={() => handleNavigation(item.path)}
              aria-label={item.label}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>
      </Toolbar>
    </Box>
  );
};
