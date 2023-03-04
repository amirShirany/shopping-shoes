import Navigation from "../component/Navigation/Navigation"

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
