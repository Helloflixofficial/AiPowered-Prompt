<Link href="/create-prompt" className="black_btn">
Create Post
</Link>
<button type="button" className="outline_btn" onClick={signOut}>
Sing Out
</button>
<Link href="/profile">
<img
  src="/assets/images/logo.svg"
  width={35}
  height={35}
  className="rounded-full"
  alt="profile"
  onClick={() => setToggleDropdown((prev) => !prev)}
/>
{toggleDropdown && (
  <div className="dropdown">
    <Link
      href="/profile"
      className="dropdown_link"
      onClick={() => setToggleDropdown(false)}
    ></Link>
  </div>
)}
</Link>