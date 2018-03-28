# webpacker-playground

## 準備

```bash
mkdir ./好きな名前
cd ./好きな名前
touch Gemfile
echo "gem 'rails', '5.1.5'" > Gemfile
bundle install
bundle exec rails -v  # バージョンを確認する
Rails 5.1.5
bundle exec rails new . --webpack  # Overwrite Gemfile? は Yes で
```
