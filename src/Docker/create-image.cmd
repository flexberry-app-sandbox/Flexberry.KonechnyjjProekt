docker build --no-cache -f SQL\Dockerfile.PostgreSql -t konechnyjj_proekt/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t konechnyjj_proekt/app ../..
