{pkgs, ...}: {
  devcontainer.enable = true;

  enterShell = ''
    bundle install
  '';

  packages = with pkgs; [
    git
  ];

  # https://devenv.sh/languages/
  languages.ruby = {
    enable = true;
    bundler.enable = true;
  };

  processes.server.exec = "jekyll server --watch";

  tasks = {
    "jekyll:build".exec = "bundle exec jekyll build";
  };
}
