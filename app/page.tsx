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

export default function Home() {
  return (
    <Box component="main">
      <AppBar position="static" elevation={0} color="transparent">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 76, gap: 3 }}>
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
            <Stack component="nav" direction="row" spacing={1} sx={{ ml: "auto" }}>
              {[
                ["Protocol", "#protocol"],
                ["Build", "#build"],
                ["Start", "#start"],
              ].map(([label, href]) => (
                <Button key={href} component="a" href={href} color="inherit" size="small">
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
          display: "grid",
          gap: { xs: 5, md: 7 },
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(360px, 520px)" },
          minHeight: { xs: "auto", md: "calc(100vh - 76px)" },
          py: { xs: 7, md: 10 },
        }}
      >
        <Stack spacing={3} sx={{ maxWidth: 680 }}>
          <Typography sx={{ color: "primary.main", fontSize: 13, fontWeight: 800, textTransform: "uppercase" }}>
            Nostr-native swap coordination
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontSize: { xs: 46, sm: 64, md: 82 },
              fontWeight: 800,
              letterSpacing: 0,
              lineHeight: 0.95,
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
            >
              PROTOCOL DEFINITION
            </Button>
            <Button
              component="a"
              href="https://poc.pontmore.xyz"
              size="large"
              variant="outlined"
              startIcon={<ArrowOutwardIcon />}
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
            p: 2.5,
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
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: "44px 1fr",
                  minHeight: 58,
                  px: 1.5,
                  py: 1.25,
                }}
              >
                <Typography sx={{ color: "text.secondary", fontSize: 12, fontWeight: 800 }}>
                  {String(index + 1).padStart(2, "0")}
                </Typography>
                <Typography sx={{ fontSize: 17, fontWeight: 800 }}>
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
          alignItems: "end",
          display: "grid",
          gap: 4.5,
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.8fr) minmax(0, 1fr)" },
          py: { xs: 6, md: 8 },
        }}
      >
        <Box>
          <Typography sx={{ color: "primary.main", fontSize: 13, fontWeight: 800, textTransform: "uppercase" }}>
            Protocol shape
          </Typography>
          <Typography component="h2" sx={{ fontSize: { xs: 31, md: 38 }, fontWeight: 800, lineHeight: 1.04, mt: 1.5 }}>
            Small core, explicit boundaries.
          </Typography>
        </Box>
        <Typography sx={{ color: "text.secondary", fontSize: 18, lineHeight: 1.6 }}>
          Pontmore separates public coordination from private execution data. Discovery, escrow
          compatibility, swap state, and dispute markers are visible and portable. Raw payment
          instructions and sensitive proof move through a companion private message lane.
        </Typography>
      </Container>

      <Container maxWidth="lg" component="section" sx={{ pb: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: "grid",
            gap: 1.75,
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(4, minmax(0, 1fr))" },
          }}
        >
          {primitives.map((item) => (
            <Card key={item.label} variant="outlined" sx={{ minHeight: { lg: 260 } }}>
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
            display: "grid",
            gap: 5,
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(300px, 430px)" },
            py: { xs: 6, md: 9.5 },
          }}
        >
          <Box>
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
          <Stack spacing={1.25} aria-label="Pontmore event kinds">
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
          display: "grid",
          gap: 5,
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(280px, 380px)" },
          pb: 11,
          pt: 4,
        }}
      >
        <Box>
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
        <Stack spacing={1.5}>
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
        display: "grid",
        gap: 2,
        gridTemplateColumns: "minmax(96px, 1fr) auto minmax(96px, 1fr)",
        mt: large ? 1.5 : 0,
        p: 1.75,
      }}
    >
      <Typography sx={{ color: "text.secondary", fontSize: 12, fontWeight: 800, textTransform: "uppercase" }}>
        {left}
      </Typography>
      {center ? (
        <Typography sx={{ color: centerColor, fontSize: large ? 34 : 24, fontWeight: 800, justifySelf: "center" }}>
          {center}
        </Typography>
      ) : (
        <Box />
      )}
      <Typography
        sx={{
          color: rightColor || "text.secondary",
          fontSize: large ? 12 : 24,
          fontWeight: 800,
          justifySelf: "end",
          textTransform: large ? "uppercase" : "none",
        }}
      >
        {right}
      </Typography>
    </Paper>
  );
}
