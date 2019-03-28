import { IContext } from "./definition";
import { publishArtifact } from "./gradle";

module.exports = async function publish(
  pluginConfig: object,
  context: IContext
) {
  const { cwd, env, logger } = context;
  logger.debug('publishing artifact');
  await publishArtifact(cwd, env as NodeJS.ProcessEnv);
};
