FROM adoptopenjdk/openjdk11:alpine
WORKDIR /app
COPY . /app

EXPOSE 8080
CMD ./mvnw install -DskipTests && ./mvnw spring-boot:run
# CMD ./mvnw spring-boot:run -Dspring-boot.run.jvmArguments="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n"

