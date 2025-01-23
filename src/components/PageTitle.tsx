interface PageTitleProps {
  children: React.ReactNode
}

export function PageTitle({ children }: PageTitleProps) {
  return <h1 className="mb-4 text-4xl font-bold">{children}</h1>
}
