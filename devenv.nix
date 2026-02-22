{pkgs, ...}: {
  devcontainer.enable = true;

  packages = with pkgs; [
    git
  ];

  # https://devenv.sh/languages/
  languages.ruby = {
    enable = true;
    bundler.enable = true;
  };

  processes.dev.exec = "jekyll server --watch";
}
