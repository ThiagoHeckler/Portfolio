export interface DbBadge {
  db: "pg" | "mongo" | "accent";
  label: string;
}

export interface ProjectCardProps {
  title: string;
  /** Live subdomain URL. */
  url?: string;
  /** Short mono label for the URL (e.g. "tasks."). */
  urlLabel?: string;
  description: string;
  /** Hue of the "why" motive block. */
  db?: "pg" | "mongo" | "both";
  /** A single label string, or an array of {db,label} for poliglota cards. */
  dbLabel?: string | DbBadge[];
  /** The justification sentence for the database choice. */
  why?: string;
  /** Stack keywords. */
  tags?: string[];
  /** Full-width highlighted variant. */
  featured?: boolean;
}

/**
 * A portfolio project card: title, subdomain, description, database rationale, stack tags.
 * @startingPoint section="Content" subtitle="Project card with DB rationale" viewport="700x320"
 */
export function ProjectCard(props: ProjectCardProps): JSX.Element;
