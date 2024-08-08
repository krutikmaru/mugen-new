import { Content } from "@/app/lib/types/project";

export function DocumentSection({
  projectContent,
}: {
  projectContent: Content[];
}) {
  const finalContent = [];
  const Heading1 = ({
    className,
    children,
  }: {
    className: string | undefined;
    children: React.ReactNode;
  }) => {
    return <h1 className={className}>{children}</h1>;
  };
  const Heading2 = ({
    className,
    children,
  }: {
    className: string | undefined;
    children: React.ReactNode;
  }) => {
    return <h2 className={className}>{children}</h2>;
  };
  const Paragraph = ({
    className,
    children,
  }: {
    className: string | undefined;
    children: React.ReactNode;
  }) => {
    return (
      <p className={`${className} text-neutral-800 dark:text-neutral-400`}>
        {children}
      </p>
    );
  };
  const Li = ({
    className,
    children,
  }: {
    className: string | undefined;
    children: React.ReactNode;
  }) => {
    return (
      <li className={`${className} text-neutral-800 dark:text-neutral-400`}>
        {children}
      </li>
    );
  };
  for (let i = 0; i < projectContent.length; i++) {
    let element = projectContent[i];
    if (element.type === "h1") {
      finalContent.push(
        <Heading1 className={element.tailwindCss}>{element.data}</Heading1>
      );
    }
    if (element.type === "h2") {
      finalContent.push(
        <Heading2 className={element.tailwindCss}>{element.data}</Heading2>
      );
    }
    if (element.type === "p") {
      finalContent.push(
        <Paragraph className={element.tailwindCss}>{element.data}</Paragraph>
      );
    }
    if (element.type === "li") {
      finalContent.push(
        <Li className={element.tailwindCss}>{element.data}</Li>
      );
    }
  }
  return <div className="w-full lg:w-[70%] p-5">{finalContent}</div>;
}
