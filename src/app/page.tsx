import logo from "@/assets/logo.png";
import resumePreview from "@/assets/resume-preview.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-5 py-12 text-center text-foreground md:flex-row md:text-start lg:gap-12">
      {/* Left Section */}
      <div className="max-w-prose space-y-6">
        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={150}
          className="mx-auto md:ms-0"
        />

        {/* Heading */}
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Create the{" "}
          <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Perfect Resume
          </span>{" "}
          in Minutes
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-muted-foreground">
          Our <span className="font-bold text-primary">AI resume builder</span>{" "}
          helps you design a professional resume with ease and confidence.
        </p>

        {/* Call-to-Action Button */}
        <Button asChild size="lg" variant="premium">
          <Link
            href="/resumes"
            className="bg-gradient-to-r from-primary to-secondary text-foreground px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg"
          >
            Get Started
          </Link>
        </Button>
      </div>

      {/* Right Section - Resume Preview */}
      <div>
        <Image
          src={resumePreview}
          alt="Resume preview"
          width={600}
          className="rounded-lg shadow-lg lg:rotate-[1.5deg]"
        />
      </div>
    </main>
  );
}
