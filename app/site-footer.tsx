import { Box, Container, Link, Stack, Typography } from "@mui/material";

export function SiteFooter() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", py: 3 }}>
      <Container
        maxWidth="lg"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          justifyContent: "space-between",
          px: { xs: 2, sm: 3 },
          width: "100%",
        }}
      >
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          © {new Date().getFullYear()} Pontmore. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link href="https://github.com/pontmore/protocol" target="_blank" rel="noopener noreferrer" variant="body2" color="text.secondary" underline="hover">
            GitHub
          </Link>
          <Link href="https://discord.gg/mHe7xny22K" target="_blank" rel="noopener noreferrer" variant="body2" color="text.secondary" underline="hover">
            Discord
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
