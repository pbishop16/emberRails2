require 'rake'

# Update Ember-Cli
task :ember_update do
  sh 'git checkout app-ember-update'
  sh 'npm uninstall -g ember-cli'
  sh 'npm cache clean'
  sh 'bower cache clean'
  sh 'npm install -g ember-cli'

  sh 'rm -rf node_modules bower_components dist temp'
  sh 'npm install -save-dev ember-cli'
  sh 'npm install'
  sh 'bower install'
  sh 'ember init'

  unless `git status` =~ /nothing to commit, working directory clean/
    sh 'git add -A'
    sh 'git commit -m "app updated to the latest ember-cli"'
  end

end 


# Development Environment
task :run do
  pids = [
    spawn("cd backend && rails s"),
    spawn("cd frontend && ember s"),
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  loop do
    sleep 1
  end
end


# Testing Environment
task :test do
  pids = [
    spawn("cd backend && rails s -e test"),
    spawn("cd frontend && ember test --server"),
  ]
end


# Staging Deployment Environment
task :deploy_staging do
  sh 'git checkout test-heroku-deploy'
  # sh 'git merge rails-served-html -m "Merging master for deployment"'
  sh 'rm -rf backend/public'
  sh 'cd frontend && ember build --environment staging --output-path=../backend/public && cd ..'
  sh 'cd backend && rake assets:precompile && cd ..'

  unless `git status` =~ /nothing to commit, working directory clean/
    sh 'git add -A'
    sh 'git commit -m "Asset compilation for staging deployment"'
  end

  sh 'git subtree push -P backend heroku master'
  sh 'heroku run rake db:migrate'
  sh 'heroku run rake db:seed'

  release_output = `heroku releases -a radiant-beach-8762 `.split "\n"
  latest_release = release_output[1].match(/v\d+/).to_s

  tags = `git tag`

  unless tags.include? latest_release
    sh "git tag #{latest_release}"
  end

  sh 'git checkout -'
end


# Production Deployment Environment
task :deploy_production do
  sh 'git checkout test-heroku-deploy'
  # sh 'git merge rails-served-html -m "Merging master for deployment"'
  sh 'rm -rf backend/public'
  sh 'cd frontend && ember build --environment production --output-path=../backend/public && cd ..'
  sh 'cd backend && rake assets:precompile && cd ..'

  unless `git status` =~ /nothing to commit, working directory clean/
    sh 'git add -A'
    sh 'git commit -m "Asset compilation for deployment"'
  end

  sh 'git subtree push -P backend heroku master'
  
  # Remove for official production deployment
  sh 'heroku run rake db:migrate'
  sh 'heroku run rake db:seed'

  release_output = `heroku releases -a radiant-beach-8762 `.split "\n"
  latest_release = release_output[1].match(/v\d+/).to_s

  tags = `git tag`

  unless tags.include? latest_release
    sh "git tag #{latest_release}"
  end

  sh 'git checkout -'
end