"use client";

import { contact } from "@/constants/info";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  ArrowUpRight,
  Sparkles,
  SendHorizonal,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-10 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white/70 backdrop-blur-sm shadow-sm text-sm text-blue-600 font-medium mb-6">
            <Sparkles size={16} />
            Available for opportunities
          </div>

          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
            Let’s Create
            <br />
            <span className="text-blue-600">Something Exceptional</span>
          </h2>

          <p className="text-lg text-muted-foreground mt-6 leading-relaxed max-w-2xl mx-auto">
            Open to internships, freelance projects, collaborations, and
            ambitious ideas. If you're building something impactful, I’d love
            to be part of it.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/80 backdrop-blur-xl shadow-2xl">
            {/* INNER GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-300/10 pointer-events-none" />

            <CardContent className="relative p-10 md:p-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* LEFT CONTENT */}
                <div className="space-y-8">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg">
                    <Mail className="text-white" size={34} />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                      Ready to work together?
                    </h3>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Whether you need a full-stack developer, frontend engineer,
                      or someone passionate about building polished digital
                      experiences — let’s connect.
                    </p>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="rounded-full px-8 py-7 text-base shadow-lg"
                  >
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-3"
                    >
                      <SendHorizonal size={18} />
                      Start a Conversation
                    </a>
                  </Button>
                </div>

                {/* RIGHT CONTENT */}
                <div className="space-y-8">
                  {/* EMAIL DISPLAY */}
                  <div className="p-6 rounded-2xl border bg-background/70 backdrop-blur-sm shadow-sm hover:shadow-md transition">
                    <p className="text-sm text-muted-foreground mb-2">
                      Email me directly
                    </p>

                    <a
                      href={`mailto:${contact.email}`}
                      className="text-xl md:text-2xl font-semibold text-blue-600 break-all hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>

                  {/* SOCIALS */}
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-wide text-muted-foreground">
                      Connect on
                    </p>

                    <div className="grid gap-4">
                      {contact.socials.map((social, index) => {
                        const Icon = social.icon;

                        return (
                          <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-between p-5 rounded-2xl border bg-background/70 backdrop-blur-sm hover:border-blue-300 hover:shadow-md transition"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                <Icon size={22} className="text-blue-600" />
                              </div>

                              <div>
                                <p className="font-medium">{social.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  View Profile
                                </p>
                              </div>
                            </div>

                            <ArrowUpRight
                              className="text-muted-foreground"
                              size={20}
                            />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;