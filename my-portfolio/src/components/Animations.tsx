import React from "react";
import { motion } from "framer-motion";

export default function AnimatedWrapper({
    children,
    animation = "fadeUp",
}: {
    children: React.ReactNode;
    animation?: "fadeUp" | "fadeLeft" | "fadeRight";
}) {
    const variants = {
        fadeUp: { opacity: 0, y: 50 },
        fadeLeft: { opacity: 0, x: -50 },
        fadeRight: { opacity: 0, x: 50 },
    };

    return (
        <motion.div
            initial={variants[animation]}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
        >
            {children}
        </motion.div>
    );
}
