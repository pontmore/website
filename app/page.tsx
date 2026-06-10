import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Link,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

const primitives = [
  {
    label: "PIP-00",
    title: "Agent identity",
    body: "Agents publish public capability records from a Nostr pubkey, including markets, payment channels, limits, pricing policy, relays, and default escrow references.",
  },
  {
    label: "PIP-01",
    title: "Escrow declaration",
    body: "Counterparties can inspect the escrow mechanism, supported settlement networks, funding rules, release rules, and reference format before a swap starts.",
  },
  {
    label: "PIP-02",
    title: "Swap lifecycle",
    body: "A swap is an immutable request plus append-only transition, evidence, dispute, note, and snapshot events. Public history stays authoritative.",
  },
  {
    label: "PIP-03",
    title: "Dispute boundary",
    body: "Disputes are visible at the protocol layer while sensitive invoices, bank details, screenshots, and internal policy payloads stay private by default.",
  },
];

const flow = [
  "discover agent",
  "inspect escrow",
  "request swap",
  "append transitions",
  "resolve outcome",
];

const pips = [
  ["30360", "Agent definition"],
  ["30361", "Escrow descriptor"],
  ["7300", "Swap request"],
  ["7301", "Transition"],
  ["7302", "Evidence"],
  ["30362", "Snapshot"],
];

const sectionSx = {
  px: { xs: 2, sm: 3 },
  width: "100%",
};

export default function Home() {
  return (
    <Box component="main">
      <AppBar position="static" elevation={0} color="transparent">
        <Container maxWidth="lg" sx={sectionSx}>
          <Toolbar
            disableGutters
            sx={{
              gap: { xs: 1.5, sm: 3 },
              minHeight: 76,
            }}
          >
            <Link
              href="#top"
              underline="none"
              color="text.primary"
              sx={{ alignItems: "center", display: "inline-flex", gap: 1.25, fontWeight: 800 }}
            >
              <Box
                component="img"
                src="/logo.svg"
                alt=""
                sx={{
                  bgcolor: "background.paper",
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 1,
                  height: 38,
                  objectFit: "contain",
                  p: 0.5,
                  width: 38,
                }}
              />
              Pontmore
            </Link>
            <Stack component="nav" direction="row" spacing={0.25} sx={{ ml: "auto" }}>
              {[
                ["Protocol", "#protocol"],
                ["Build", "#build"],
                ["Start", "#start"],
              ].map(([label, href]) => (
                <Button key={href} component="a" href={href} color="inherit" size="small" sx={{ minWidth: "auto", px: { xs: 0.75, sm: 1 } }}>
                  {label}
                </Button>
              ))}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Container
        id="top"
        maxWidth="lg"
        component="section"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 5, md: 7 },
          justifyContent: "space-between",
          minHeight: { xs: "auto", md: "calc(100vh - 76px)" },
          ...sectionSx,
          py: { xs: 7, md: 10 },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            alignItems: "flex-start",
            maxWidth: 680,
            minWidth: 0,
            mx: { xs: "auto", md: 0 },
            textAlign: "left",
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Typography sx={{ color: "primary.main", fontSize: 13, fontWeight: 800, textTransform: "uppercase" }}>
            Nostr-native swap coordination
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontSize: { xs: 39, sm: 64, md: 82 },
              fontWeight: 800,
              letterSpacing: 0,
              lineHeight: { xs: 1, md: 0.95 },
            }}
          >
            Open rails for agents, escrow, and Bitcoin-fiat swaps.
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: { xs: 18, md: 20 }, lineHeight: 1.55 }}>
            Pontmore gives swap operators and clients a shared public language for discovering agents,
            declaring escrow assumptions, tracking swap state, and resolving disputes without making an
            app account the root of identity.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Button
              component="a"
              href="https://github.com/pontmore/protocol"
              color="secondary"
              size="large"
              variant="contained"
              startIcon={<GitHubIcon />}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              PROTOCOL DEFINITION
            </Button>
            <Button
              component="a"
              href="https://poc.pontmore.xyz"
              size="large"
              variant="outlined"
              startIcon={<ArrowOutwardIcon />}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              PROOF OF CONCEPT
            </Button>
          </Stack>
        </Stack>

        <Paper
          aria-label="Pontmore protocol flow"
          elevation={0}
          sx={{
            background:
              "linear-gradient(135deg, rgba(47, 158, 68, 0.12), transparent 38%), linear-gradient(225deg, rgba(240, 140, 0, 0.18), transparent 42%), #fffdf8",
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
            boxShadow: "0 24px 70px rgba(28, 36, 29, 0.14)",
            mx: { xs: "auto", md: 0 },
            p: 2.5,
            width: { xs: "100%", md: 520 },
          }}
        >
          <AlignedRow left="public event rail" right="Nostr" rightColor="primary.main" />
          <AlignedRow left="npub" center="agent" right="d tag" centerColor="secondary.main" large />
          <Stack spacing={1.25} sx={{ my: 2.25 }}>
            {flow.map((item, index) => (
              <Paper
                key={item}
                elevation={0}
                sx={{
                  alignItems: "center",
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 1,
                  display: "flex",
                  gap: 2,
                  minHeight: 58,
                  minWidth: 0,
                  px: 1.5,
                  py: 1.25,
                }}
              >
                <Typography sx={{ color: "text.secondary", fontSize: 12, fontWeight: 800 }}>
                  {String(index + 1).padStart(2, "0")}
                </Typography>
                <Typography sx={{ fontSize: { xs: 15, sm: 17 }, fontWeight: 800, minWidth: 0 }}>
                  {item}
                </Typography>
              </Paper>
            ))}
          </Stack>
          <Paper
            elevation={0}
            sx={{
              bgcolor: "rgba(36, 107, 143, 0.09)",
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
              p: 1.75,
            }}
          >
            <Typography sx={{ color: "text.secondary", fontSize: 12, fontWeight: 800, textTransform: "uppercase" }}>
              private lane
            </Typography>
            <Typography sx={{ fontWeight: 800, lineHeight: 1.35, mt: 1 }}>
              Gift Wrap payloads for invoices, payout details, and sensitive evidence
            </Typography>
          </Paper>
        </Paper>
      </Container>

      <Container
        id="protocol"
        maxWidth="lg"
        component="section"
        sx={{
          alignItems: { xs: "flex-start", md: "flex-end" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4.5,
          ...sectionSx,
          py: { xs: 6, md: 8 },
        }}
      >
          <Box sx={{ flex: { md: "0 1 42%" }, minWidth: 0, textAlign: "left", width: "100%" }}>
          <Typography sx={{ color: "primary.main", fontSize: 13, fontWeight: 800, textTransform: "uppercase" }}>
            Protocol shape
          </Typography>
          <Typography component="h2" sx={{ fontSize: { xs: 31, md: 38 }, fontWeight: 800, lineHeight: 1.04, mt: 1.5 }}>
            Small core, explicit boundaries.
          </Typography>
        </Box>
        <Typography sx={{ color: "text.secondary", flex: { md: "1 1 0" }, fontSize: 18, lineHeight: 1.6, minWidth: 0, textAlign: "left" }}>
          Pontmore separates public coordination from private execution data. Discovery, escrow
          compatibility, swap state, and dispute markers are visible and portable. Raw payment
          instructions and sensitive proof move through a companion private message lane.
        </Typography>
      </Container>

      <Container maxWidth="lg" component="section" sx={{ ...sectionSx, pb: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.75,
          }}
        >
          {primitives.map((item) => (
            <Card
              key={item.label}
              variant="outlined"
              sx={{
                flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 8px)", lg: "1 1 0" },
                minHeight: { lg: 260 },
                minWidth: 0,
              }}
            >
              <CardContent>
                <Chip label={item.label} size="small" variant="outlined" />
                <Typography component="h3" sx={{ fontSize: 20, fontWeight: 800, mt: 1.5 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.55, mt: 1.5 }}>
                  {item.body}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      <Box id="build" component="section" sx={{ bgcolor: "#18241b", color: "#fff", my: 4.25 }}>
        <Container
          maxWidth="lg"
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 5,
            justifyContent: "space-between",
            ...sectionSx,
            py: { xs: 6, md: 9.5 },
          }}
        >
          <Box sx={{ flex: "1 1 0", minWidth: 0, width: "100%" }}>
            <Typography sx={{ color: "#9bd2ff", fontSize: 13, fontWeight: 800, textTransform: "uppercase" }}>
              Implementation baseline
            </Typography>
            <Typography component="h2" sx={{ fontSize: { xs: 31, md: 38 }, fontWeight: 800, lineHeight: 1.04, mt: 1.5 }}>
              Publish capabilities once. Let compatible clients find them.
            </Typography>
            <Stack spacing={2.25} sx={{ mt: 3 }}>
              <Typography sx={{ color: "#d2ded6", fontSize: 18, lineHeight: 1.65 }}>
                Agents declare their supported fiat currencies, payment channels, settlement networks,
                regions, limits, and escrow references.
              </Typography>
              <Typography sx={{ color: "#d2ded6", fontSize: 18, lineHeight: 1.65 }}>
                Clients can resolve the same Nostr addressable events from relays instead of integrating
                every operator one by one.
              </Typography>
            </Stack>
          </Box>
          <Stack spacing={1.25} aria-label="Pontmore event kinds" sx={{ flex: { md: "0 0 430px" }, width: "100%" }}>
            {pips.map(([kind, name]) => (
              <Paper
                key={kind}
                elevation={0}
                sx={{
                  alignItems: "center",
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                  border: 1,
                  borderColor: "rgba(255, 255, 255, 0.16)",
                  borderRadius: 1,
                  color: "#fff",
                  display: "flex",
                  gap: 2,
                  minHeight: 52,
                  px: 1.75,
                  py: 1.5,
                }}
              >
                <Chip label={kind} size="small" sx={{ bgcolor: "#fff8e5", fontWeight: 800 }} />
                <Typography sx={{ fontWeight: 700 }}>{name}</Typography>
              </Paper>
            ))}
          </Stack>
        </Container>
      </Box>

      <Container
        id="start"
        maxWidth="lg"
        component="section"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 5,
          justifyContent: "space-between",
          ...sectionSx,
          pb: 11,
          pt: 4,
        }}
      >
        <Box sx={{ flex: "1 1 0", minWidth: 0 }}>
          <Typography sx={{ color: "primary.main", fontSize: 13, fontWeight: 800, textTransform: "uppercase" }}>
            Where to begin
          </Typography>
          <Typography component="h2" sx={{ fontSize: { xs: 31, md: 38 }, fontWeight: 800, lineHeight: 1.04, mt: 1.5 }}>
            Read PIP-00 through PIP-03, then test against relays.
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 18, lineHeight: 1.6, mt: 2 }}>
            The current protocol core covers agent definitions, escrow descriptors, swap lifecycle
            events, and dispute policy. The companion proof of concept demonstrates publishing and
            discovering Pontmore events on Nostr relays.
          </Typography>
        </Box>
        <Stack spacing={1.5} sx={{ flex: { md: "0 0 380px" }, width: { xs: "100%", md: 380 } }}>
          {[
            ["Protocol specs", "https://github.com/pontmore/protocol"],
            ["Next.js proof of concept", "https://github.com/pontmore/nextjs-pontmore"],
            ["POC Docker image", "https://hub.docker.com/r/pontmore/nextjs-pontmore"],
          ].map(([label, href]) => (
            <Button
              key={href}
              component="a"
              href={href}
              variant="outlined"
              color="inherit"
              size="large"
              endIcon={<ArrowOutwardIcon />}
              sx={{ justifyContent: "space-between" }}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

function AlignedRow({
  left,
  center,
  right,
  centerColor,
  rightColor,
  large = false,
}: {
  left: string;
  center?: string;
  right: string;
  centerColor?: string;
  rightColor?: string;
  large?: boolean;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        alignItems: "center",
        border: 1,
        borderColor: "divider",
        borderRadius: 1,
        display: "flex",
        flexWrap: "nowrap",
        gap: { xs: 1, sm: 2 },
        justifyContent: "space-between",
        mt: large ? 1.5 : 0,
        p: 1.75,
      }}
    >
      <Typography
        sx={{
          color: "text.secondary",
          flex: "1 1 0",
          fontSize: { xs: 10, sm: 12 },
          fontWeight: 800,
          minWidth: 0,
          textTransform: "uppercase",
        }}
      >
        {left}
      </Typography>
      {center ? (
        <Typography
          sx={{
            color: centerColor,
            flex: "0 0 auto",
            fontSize: large ? { xs: 30, sm: 34 } : 24,
            fontWeight: 800,
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          {center}
        </Typography>
      ) : (
        <Box sx={{ flex: "0 0 auto" }} />
      )}
      <Typography
        sx={{
          color: rightColor || "text.secondary",
          flex: "1 1 0",
          fontSize: large ? { xs: 10, sm: 12 } : { xs: 20, sm: 24 },
          fontWeight: 800,
          minWidth: 0,
          textAlign: "right",
          textTransform: large ? "uppercase" : "none",
        }}
      >
        {right}
      </Typography>
    </Paper>
  );
}
