-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "tag" TEXT,
ADD COLUMN     "thumbnailUrl" TEXT NOT NULL DEFAULT 'https://ionicframework.com/docs/img/demos/thumbnail.svg';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatarUrl" TEXT NOT NULL DEFAULT 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg',
ADD COLUMN     "bio" TEXT;
