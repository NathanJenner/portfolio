import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import CardBase from "@/components/card/card";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <section>
          <div className="inline-block max-w-lg text-center justify-center">
            <span className={title()}>Make&nbsp;</span>
            <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
            <br />
            <span className={title()}>
              websites regardless of your design experience.
            </span>
            <div className={subtitle({ class: "mt-4" })}>
              Beautiful, fast and modern React UI library.
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-xl text-center justify-center">
            <span className={title({ color: "violet" })}>About me&nbsp;</span>
          </div>
          <div className="inline-block max-w-5xl text-center justify-center">
            <p>
              Hey there! I’m a junior developer with a solid background in the
              full software development life cycle (SDLC). While I’m still early
              in my dev journey, I’ve had plenty of hands-on experience working
              through everything from planning and design to testing and
              deployment.
            </p>
            <br />
            <p>
              My main focus has been C# and the .NET stack, but I’ve also dipped
              my toes into TypeScript and React—just enough to get a feel for
              frontend development and how it all connects.
            </p>
            <br />
            <p>
              I enjoy writing clean, maintainable code and love solving problems
              that make systems run smoother. Right now, I’m focused on growing
              my backend skills, learning more about cloud technologies, and
              continuing to explore modern development tools and frameworks.
            </p>
          </div>
        </section>

        <section>
          <div className="flex gap-3">
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
            >
              Documentation
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center">
            <span className={title({ color: "violet" })}>Projects&nbsp;</span>
          </div>
        </section>

        <section>
          <div id="myProjects">
            <CardBase />
          </div>
        </section>

        <section>
          <div className="mt-8">
            <Snippet hideCopyButton hideSymbol variant="bordered">
              <span>
                Powered by <Code color="success">curiosity/learning.tsx</Code>
              </span>
            </Snippet>
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
}
