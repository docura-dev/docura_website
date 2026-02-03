import { motion } from "framer-motion";
import { Bot, FileText, Bell, Mail, MessageSquare, FolderOpen } from "lucide-react";

interface FloatingDocumentProps {
  className?: string;
  delay?: number;
}

export const FloatingDocument = ({ className = "", delay = 0 }: FloatingDocumentProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      className="bg-background rounded-2xl shadow-xl border border-border/50 p-4 w-32 md:w-40"
    >
      <div className="w-full h-2 bg-primary/20 rounded mb-2" />
      <div className="w-3/4 h-2 bg-muted rounded mb-2" />
      <div className="w-5/6 h-2 bg-muted rounded mb-2" />
      <div className="w-2/3 h-2 bg-muted rounded" />
      <div className="mt-3 flex gap-1">
        <div className="w-3 h-3 rounded-full bg-primary/30" />
        <div className="w-3 h-3 rounded-full bg-primary/20" />
      </div>
    </motion.div>
  </motion.div>
);

export const FloatingDataBlock = ({ className = "", delay = 0 }: FloatingDocumentProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [10, -10, 10], rotate: [0, 2, 0, -2, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }}
      className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-xl border border-primary/20 p-3 w-28 md:w-36"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <div className="w-12 h-2 bg-primary/30 rounded" />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between">
          <div className="w-8 h-1.5 bg-muted-foreground/20 rounded" />
          <div className="w-6 h-1.5 bg-primary/40 rounded" />
        </div>
        <div className="flex justify-between">
          <div className="w-10 h-1.5 bg-muted-foreground/20 rounded" />
          <div className="w-4 h-1.5 bg-primary/40 rounded" />
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export const FloatingChart = ({ className = "", delay = 0 }: FloatingDocumentProps) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [-5, 15, -5] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: delay + 1 }}
      className="bg-background/90 backdrop-blur-sm rounded-2xl shadow-lg border border-border/50 p-4 w-36 md:w-44"
    >
      <div className="flex items-end gap-1 h-16 justify-center">
        <motion.div
          animate={{ height: ["40%", "80%", "40%"] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          className="w-3 bg-primary/30 rounded-t"
          style={{ height: "40%" }}
        />
        <motion.div
          animate={{ height: ["60%", "30%", "60%"] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          className="w-3 bg-primary/50 rounded-t"
          style={{ height: "60%" }}
        />
        <motion.div
          animate={{ height: ["80%", "50%", "80%"] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          className="w-3 bg-primary rounded-t"
          style={{ height: "80%" }}
        />
        <motion.div
          animate={{ height: ["50%", "90%", "50%"] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
          className="w-3 bg-primary/70 rounded-t"
          style={{ height: "50%" }}
        />
      </div>
      <div className="mt-2 text-center">
        <div className="w-16 h-1.5 bg-muted rounded mx-auto" />
      </div>
    </motion.div>
  </motion.div>
);

export const FloatingWorkflow = ({ className = "", delay = 0 }: FloatingDocumentProps) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [5, -15, 5] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.3 }}
      className="bg-background/95 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 p-3 w-40 md:w-48"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
        <div className="flex-1">
          <div className="w-16 h-2 bg-muted rounded" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-1 h-8 bg-primary/20 rounded ml-3" />
        <div className="flex-1 space-y-1.5">
          <div className="w-20 h-1.5 bg-muted rounded" />
          <div className="w-14 h-1.5 bg-primary/30 rounded" />
        </div>
      </div>
    </motion.div>
  </motion.div>
);

// New floating elements with business icons

export const FloatingAIBot = ({ className = "", delay = 0 }: FloatingDocumentProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [-8, 12, -8], rotate: [0, 3, 0, -3, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      className="bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/20 p-4 w-28 md:w-32"
    >
      <div className="flex items-center justify-center mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="w-full h-1.5 bg-primary/20 rounded" />
        <div className="w-3/4 h-1.5 bg-muted rounded mx-auto" />
      </div>
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-2 w-2 h-2 rounded-full bg-primary mx-auto"
      />
    </motion.div>
  </motion.div>
);

export const FloatingEmail = ({ className = "", delay = 0 }: FloatingDocumentProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [5, -10, 5], x: [-3, 3, -3] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.2 }}
      className="bg-background/95 backdrop-blur-sm rounded-xl shadow-lg border border-border/50 p-3 w-32 md:w-36"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
          <Mail className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="w-full h-1.5 bg-muted rounded" />
          <div className="w-2/3 h-1 bg-muted-foreground/20 rounded" />
        </div>
      </div>
      <div className="space-y-1">
        <div className="w-full h-1 bg-muted-foreground/15 rounded" />
        <div className="w-4/5 h-1 bg-muted-foreground/15 rounded" />
      </div>
    </motion.div>
  </motion.div>
);

export const FloatingNotification = ({ className = "", delay = 0 }: FloatingDocumentProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [-12, 8, -12] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
      className="bg-background rounded-xl shadow-xl border border-border/50 p-3 w-36 md:w-40"
    >
      <div className="flex items-start gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Bell className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1 space-y-1.5">
          <div className="w-full h-2 bg-foreground/10 rounded" />
          <div className="w-3/4 h-1.5 bg-muted rounded" />
        </div>
      </div>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary"
      />
    </motion.div>
  </motion.div>
);

export const FloatingChat = ({ className = "", delay = 0 }: FloatingDocumentProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [8, -8, 8], rotate: [-1, 1, -1] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.4 }}
      className="bg-background/90 backdrop-blur-sm rounded-2xl shadow-lg border border-border/50 p-3 w-32 md:w-38"
    >
      <div className="flex items-center gap-2 mb-2">
        <MessageSquare className="w-4 h-4 text-primary" />
        <div className="w-12 h-1.5 bg-primary/30 rounded" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-end">
          <div className="w-16 h-4 bg-primary/20 rounded-lg rounded-tr-none" />
        </div>
        <div className="flex justify-start">
          <div className="w-20 h-4 bg-muted rounded-lg rounded-tl-none" />
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export const FloatingFiles = ({ className = "", delay = 0 }: FloatingDocumentProps) => (
  <motion.div
    initial={{ opacity: 0, y: -15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [-6, 10, -6], rotate: [0, -2, 0, 2, 0] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.3 }}
      className="bg-background rounded-xl shadow-lg border border-border/50 p-3 w-28 md:w-32"
    >
      <div className="flex items-center justify-center mb-2">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
          <FolderOpen className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="flex gap-1 justify-center">
        <div className="w-5 h-6 bg-muted rounded" />
        <div className="w-5 h-6 bg-primary/20 rounded" />
        <div className="w-5 h-6 bg-muted rounded" />
      </div>
    </motion.div>
  </motion.div>
);

export const FloatingFileDoc = ({ className = "", delay = 0 }: FloatingDocumentProps) => (
  <motion.div
    initial={{ opacity: 0, x: 15 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [10, -5, 10], x: [2, -2, 2] }}
      transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay }}
      className="bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm rounded-xl shadow-lg border border-border/50 p-3 w-24 md:w-28"
    >
      <div className="flex items-center justify-center mb-2">
        <FileText className="w-6 h-6 text-primary" />
      </div>
      <div className="space-y-1">
        <div className="w-full h-1 bg-muted rounded" />
        <div className="w-3/4 h-1 bg-muted rounded" />
        <div className="w-5/6 h-1 bg-muted rounded" />
      </div>
    </motion.div>
  </motion.div>
);

// Gradient orbs for background
export const GradientOrb = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
    style={{
      background: "radial-gradient(circle, hsl(197 78% 60% / 0.4) 0%, transparent 70%)",
    }}
  />
);
