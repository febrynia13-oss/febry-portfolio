import { Github, Linkedin, Mail } from 'lucide-react'

/**
 * Footer
 * Minimal closing bar with copyright, a small tagline, and quick
 * links to GitHub, LinkedIn, and email.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-10">
      <div className="section flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="font-display text-sm text-text">
            Febry Tania Zahra &copy; {year}
          </p>
          <p className="font-mono text-xs text-faint">Built with React &amp; curiosity.</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/febrynia13-oss"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/febry-nia-3696593b8/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="febrynia13@gmail.com"
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
