interface HeadingProps {
    title: string
    description: string
}

// eslint-disable-next-line no-undef
export const Heading: React.FC<HeadingProps> = ({
  title,
  description
}) => {
  return (
    <div>
      <h2 className='text-3xl font-bold tracking-tight'>{title}</h2>
      <p className='text-sm text-muted-foreground'>{description}</p>
    </div>
  )
}