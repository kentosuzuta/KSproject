"use client";

import { Box, Typography, Link, Stack } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <Box component="footer" className="bg-black text-white px-6 py-10 mt-20">
      <Typography variant="body2" align="left" gutterBottom>
        Copyright © 2025 Temp Inc. All rights reserved.
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        className="mt-4 text-sm sm:flex-row sm:justify-left sm:gap-6"
      >
        <Link href="/guide" underline="hover" color="inherit">
          ガイド
        </Link>
        <Link href="/terms/sales" underline="hover" color="inherit">
          特定商取引法に基づく表記 / 販売規約
        </Link>
        <Link href="/terms" underline="hover" color="inherit">
          利用規約
        </Link>
        <Link href="/privacy" underline="hover" color="inherit">
          プライバシーポリシー
        </Link>
      </Stack>
    </Box>
  );
};
