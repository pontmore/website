import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import XIcon from "@mui/icons-material/X";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import projectsData from "../projects.json";

type ProjectLinkKey = "github" | "nostr" | "x" | "website";

type Project = {
  name: string;
  description: string;
  links?: Partial<Record<ProjectLinkKey, string>>;
};

const projects = projectsData.projects as Project[];

const primitives = [
  {
    label: "PIP-00",
    title: "Capability discovery",
    body: "Agents publish a versioned capability index from a Nostr pubkey, with explicit references to the protocol resources each capability needs.",
  },
  {
    label: "PIP-01",
    title: "Escrow compatibility",
    body: "Expiring descriptors identify an escrow mechanism, supported networks, and an optional machine-readable service schema before a coordination begins.",
  },
  {
    label: "PIP-02",
    title: "Coordination event chains",
    body: "An immutable root and cryptographically linked actions let compatible clients reconstruct authority, progress, disputes, and economic outcomes.",
  },
  {
    label: "PROFILE",
    title: "Application semantics",
    body: "Versioned profiles define domain terms, roles, actions, deadlines, and completion rules. The first experimental profile coordinates fiat/Bitcoin swaps.",
  },
];

const flow = [
  "discover capabilities",
  "check escrow compatibility",
  "pin terms and profile",
  "append signed actions",
  "reconstruct the outcome",
];

const pips = [
  ["30360", "Agent capability index"],
  ["30361", "Escrow descriptor"],
  ["7300", "Coordination root"],
  ["7301", "Coordination action"],
];

const projectLinkMeta: Record<
  ProjectLinkKey,
  {
    label: string;
    icon: React.ReactElement;
  }
> = {
  website: { label: "Website", icon: <LanguageIcon /> },
  github: { label: "GitHub", icon: <GitHubIcon /> },
  nostr: { label: "Nostr", icon: <AlternateEmailIcon /> },
  x: { label: "X", icon: <XIcon /> },
};

const sectionSx = {
  px: { xs: 2, sm: 3 },
  width: "100%",
};

export default function Home() {
  return (
    <Box component="main">
      <SiteHeader />

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
            Nostr-native economic coordination
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
            Open rails for agents to coordinate economic activity.
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: { xs: 18, md: 20 }, lineHeight: 1.55 }}>
            Pontmore gives applications a shared, verifiable language for discovering Agent capabilities,
            checking escrow compatibility, and reconstructing bounded coordinations from signed Nostr
            events—without making an app account the root of identity.
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
              "linear-gradient(135deg, rgba(87, 194, 106, 0.14), transparent 38%), linear-gradient(225deg, rgba(240, 140, 0, 0.16), transparent 42%), #17251b",
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
            boxShadow: "0 24px 70px rgba(28, 36, 29, 0.14)",
            mx: { xs: "auto", md: 0 },
            p: 2.5,
            width: { xs: "100%", md: 520 },
          }}
        >
          <AlignedRow left="signed event chain" right="Nostr" rightColor="primary.main" />
          <AlignedRow left="pubkey" center="Agent" right="profile" centerColor="secondary.main" large />
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
              bgcolor: "rgba(87, 194, 106, 0.08)",
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
              p: 1.75,
            }}
          >
            <Typography sx={{ color: "text.secondary", fontSize: 12, fontWeight: 800, textTransform: "uppercase" }}>
              application boundary
            </Typography>
            <Typography sx={{ fontWeight: 800, lineHeight: 1.35, mt: 1 }}>
              Private payloads, service operations, business policy, and evidence evaluation
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
          Pontmore standardizes the public facts needed to verify a coordination: participants,
          authority, pinned terms, linked actions, and economic outcomes. Applications and services
          retain execution, private payloads, business policy, reputation, and evidence evaluation.
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

      <Box id="build" component="section" sx={{ bgcolor: "#07110a", color: "#fff", my: 4.25 }}>
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
              Choose a profile. Pin every version. Reconstruct the same result.
            </Typography>
            <Stack spacing={2.25} sx={{ mt: 3 }}>
              <Typography sx={{ color: "#d2ded6", fontSize: 18, lineHeight: 1.65 }}>
                Agents publish versioned capability identifiers and references to the escrow or protocol
                resources required to use them.
              </Typography>
              <Typography sx={{ color: "#d2ded6", fontSize: 18, lineHeight: 1.65 }}>
                Conforming clients validate the same signed roots and action chains, reject unsupported
                versions or forks, and derive state without trusting relay order or private databases.
              </Typography>
            </Stack>
            <Box sx={{ borderTop: 1, borderColor: "rgba(255, 255, 255, 0.14)", mt: 5, pt: 4 }}>
              <Typography sx={{ color: "#9bd2ff", fontSize: 13, fontWeight: 800, textTransform: "uppercase" }}>
                Where to begin
              </Typography>
              <Typography component="h3" sx={{ fontSize: { xs: 27, md: 32 }, fontWeight: 800, lineHeight: 1.08, mt: 1.5 }}>
                Select a conformance profile, then read its required specifications.
              </Typography>
              <Typography sx={{ color: "#d2ded6", fontSize: 18, lineHeight: 1.65, mt: 2 }}>
                The active draft has three PIPs for capability discovery, escrow compatibility, and
                coordination event chains. Fiat/Bitcoin swap semantics live in the experimental
                <Box component="span" sx={{ color: "#fff", fontWeight: 700 }}> pontmore/swap@1 </Box>
                profile, not in the shared kernel.
              </Typography>
            </Box>
          </Box>
          <Stack spacing={3} sx={{ flex: { md: "0 0 430px" }, width: "100%" }}>
            <Stack spacing={1.25} aria-label="Pontmore event kinds">
              {pips.map(([kind, name]) => (
                <Paper
                  key={kind}
                  elevation={0}
                  sx={{
                    alignItems: "center",
                    bgcolor: "rgba(255, 255, 255, 0.06)",
                    border: 1,
                    borderColor: "rgba(255, 255, 255, 0.14)",
                    borderRadius: 1,
                    color: "#fff",
                    display: "flex",
                    gap: 2,
                    minHeight: 52,
                    px: 1.75,
                    py: 1.5,
                  }}
                >
                  <Chip
                    label={kind}
                    size="small"
                    sx={{ bgcolor: "secondary.main", color: "secondary.contrastText", fontWeight: 800 }}
                  />
                  <Typography sx={{ fontWeight: 700 }}>{name}</Typography>
                </Paper>
              ))}
            </Stack>
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
          </Stack>
        </Container>
      </Box>

      <ProjectsSection />
      <SiteFooter />
    </Box>
  );
}

function ProjectsSection() {
  return (
    <Container
      id="projects"
      maxWidth="lg"
      component="section"
      sx={{
        ...sectionSx,
        pb: { xs: 8, md: 11 },
        pt: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          alignItems: { xs: "flex-start", md: "flex-end" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Box sx={{ maxWidth: 670, minWidth: 0 }}>
          <Typography sx={{ color: "primary.main", fontSize: 13, fontWeight: 800, textTransform: "uppercase" }}>
            Built on Pontmore
          </Typography>
          <Typography component="h2" sx={{ fontSize: { xs: 31, md: 38 }, fontWeight: 800, lineHeight: 1.04, mt: 1.5 }}>
            Projects using the protocol.
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 18, lineHeight: 1.6, mt: 2 }}>
            This directory is backed by a simple JSON file. Add your Pontmore project by opening a pull
            request that updates <Box component="span" sx={{ color: "text.primary", fontWeight: 700 }}>projects.json</Box>.
          </Typography>
        </Box>
        <Button
          component="a"
          href="https://github.com/pontmore/website/blob/main/projects.json"
          variant="outlined"
          color="inherit"
          endIcon={<ArrowOutwardIcon />}
          sx={{ flexShrink: 0, width: { xs: "100%", sm: "auto" } }}
        >
          Edit projects.json
        </Button>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 1.75,
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
        }}
      >
        {projects.map((project) => (
          <Card key={project.name} variant="outlined">
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                minHeight: "100%",
              }}
            >
              <Box>
                <Typography component="h3" sx={{ fontSize: 22, fontWeight: 800 }}>
                  {project.name}
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.55, mt: 1.25 }}>
                  {project.description}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "auto" }}>
                {(Object.entries(project.links ?? {}) as Array<[ProjectLinkKey, string]>).map(([key, href]) => {
                  const meta = projectLinkMeta[key];

                  if (!meta || !href) {
                    return null;
                  }

                  if (key === "x") {
                    return (
                      <IconButton
                        key={`${project.name}-${key}`}
                        aria-label={`${project.name} on X`}
                        component="a"
                        href={href}
                        size="small"
                        color="inherit"
                        sx={{ border: 1, borderColor: "currentColor", borderRadius: 1, height: 31, width: 31 }}
                      >
                        {meta.icon}
                      </IconButton>
                    );
                  }

                  return (
                    <Button
                      key={`${project.name}-${key}`}
                      component="a"
                      href={href}
                      size="small"
                      variant="outlined"
                      color="inherit"
                      startIcon={meta.icon}
                    >
                      {meta.label}
                    </Button>
                  );
                })}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
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
