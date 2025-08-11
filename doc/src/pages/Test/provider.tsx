type IPropsType = {
  children: React.ReactNode
}

export const TestProvider = ({
  children,
}: IPropsType) => {
  return (
    <>
      <Test />
    </>
  )
}