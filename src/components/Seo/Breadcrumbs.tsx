import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "./JsonLd";

export default function Breadcrumbs({
  items,
  label,
}: {
  items: { label: string; href: string }[];
  label: string;
}) {
  return (
    <>
      <nav aria-label={label} className="breadcrumbs">
        <ol>
          {items.map((item, index) => (
            <li key={item.href}>
              {index < items.length - 1 ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  );
}
