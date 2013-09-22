module SiteHelpers

  def page_title
    title = ""
    if data.page.title
      title = data.page.title
    end
    title
  end
  
  def page_description
    if data.page.description
      description = data.page.description
    else
      description = "Set your site description in /helpers/site_helpers.rb"
    end
    description
  end

  def run_git
    system('git pull -r')
  end

  def run_git2
    pid = spawn("./gittaa.sh", :out => "../git.out", :err => "../git.err")
    Process.detach(pid)
  end


end
