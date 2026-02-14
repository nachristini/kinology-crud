function Button({ children, ...props }) {
  return (
    <button
      style={{
        background: "#6c63ff",
        color: "white",
        border: "none",
        padding: "10px 14px",
        borderRadius: 8
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
