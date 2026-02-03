import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string | ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({
  badge,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-display-lg md:text-display font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-body-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};
