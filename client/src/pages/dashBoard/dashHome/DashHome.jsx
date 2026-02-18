const DashHome = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[var(--text-main)]">
          Dashboard Overview
        </h1>
        <p className="text-muted mt-1">
          Quick summary of your portfolio activity
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-5">
          <p className="text-muted text-sm">Total Projects</p>
          <h2 className="text-3xl font-bold mt-2">12</h2>
          <p className="text-accent-soft text-sm mt-1">Live & draft projects</p>
        </div>

        <div className="card p-5">
          <p className="text-muted text-sm">Total Blogs</p>
          <h2 className="text-3xl font-bold mt-2">5</h2>
          <p className="text-accent-soft text-sm mt-1">Published articles</p>
        </div>

        <div className="card p-5">
          <p className="text-muted text-sm">Messages</p>
          <h2 className="text-3xl font-bold mt-2">23</h2>
          <p className="text-accent-soft text-sm mt-1">
            Contact form inquiries
          </p>
        </div>

        <div className="card p-5">
          <p className="text-muted text-sm">Profile Views</p>
          <h2 className="text-3xl font-bold mt-2">1.2k</h2>
          <p className="text-accent-soft text-sm mt-1">Last 30 days</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card p-6">
        <h2 className="section-title">Quick Actions</h2>

        <div className="flex flex-wrap gap-4 mt-4">
          <button className="btn-primary">+ Add Project</button>
          <button className="btn-primary">+ Write Blog</button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card p-6">
        <h2 className="section-title">Recent Activity</h2>

        <ul className="mt-4 space-y-3 text-sm">
          <li className="text-muted">
            • New message received from contact form
          </li>
          <li className="text-muted">• Project “Portfolio Website” updated</li>
          <li className="text-muted">
            • Blog “React Performance Tips” published
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashHome;
