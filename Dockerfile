FROM node:lts as dependencies
WORKDIR /binary-brain
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /binary-brain
COPY . .
COPY --from=dependencies /binary-brain/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /binary-brain
ENV NODE_ENV production

COPY --from=builder /binary-brain/public ./public
COPY --from=builder /binary-brain/package.json ./package.json
COPY --from=builder /binary-brain/.next ./.next
COPY --from=builder /binary-brain/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]