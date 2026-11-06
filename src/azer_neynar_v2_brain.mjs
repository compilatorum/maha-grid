#!/usr/bin/env node
/**
 * 🛰️ Cérebro do Bot Etnógrafo "a zer" — Farcaster API V2 (Neynar) + Hub API Complete Adapter
 * ===========================================================================================
 * Implementa e contextualiza TODAS as categorias da Farcaster API V2 da Neynar e da Farcaster Hub API
 * para a operação do bot etnógrafo "a zer" (L0 Scout, L1 Envoy, L2 Escriba, L3 Treasury/DeFAI)
 * integrado ao Maha Grid (9 Ciclos / 81 Casas), DAO Embassy (H-A-H, HaaS, A2H) e Surfpool (36 Wallets).
 */

import { NeynarAPIClient, Configuration } from "@neynar/nodejs-sdk";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class AzerEthnographerBrain {
  constructor(apiKey = process.env.NEYNAR_API_KEY || "NEYNAR_API_DOCS") {
    this.apiKey = apiKey;
    this.config = new Configuration({ apiKey: this.apiKey });
    this.neynar = new NeynarAPIClient(this.config);
    this.botIdentity = {
      name: "a zer",
      handle: "@azer-scribe",
      fid: 888888,
      roles: ["L0_Scout", "L1_Envoy", "L2_Escriba_Scribe", "L3_Treasury_DeFAI"],
    };
  }

  /**
   * Retorna o catálogo operacional completo das 21 categorias Neynar API V2 + 12 categorias Hub API
   * mapeadas para as ações do bot "a zer" na Maha Grid / DAO Embassy.
   */
  getFullApiOperationalMatrix() {
    return {
      bot: this.botIdentity,
      neynarApiV2: {
        // 1. 👤 Usuário (User)
        user: {
          searchUsernames: { sdkMethod: "searchUser", role: "L0_Scout", action: "Mapear Envoys, Stewards e Stakeholders de DAOs" },
          byFids: { sdkMethod: "fetchBulkUsers", role: "L0_Scout", action: "Identificação única de jogadores humanos e agentes nos 9 Ciclos" },
          powerUsers: { sdkMethod: "fetchPowerUsers / fetchPowerUserFids", role: "L0_Scout", action: "Mapeamento de Whales e prevenção da Serpente Takshaka" },
          byEthOrSolAddresses: { sdkMethod: "fetchBulkUsersByEthOrSolAddress", role: "L3_Treasury", action: "Vinculação das 36 carteiras Surfpool (EVM + SVM) ao grafo social" },
          byUsernameOrLocation: { sdkMethod: "lookupUserByUsername", role: "L1_Envoy", action: "Filtro geolocalizado para recrutar playtesters para o Nodespace Berlim" },
          fetchUsersCasts: { sdkMethod: "fetchCastsForUser", role: "L2_Escriba", action: "Coleta de corpus autoetnográfico (◈) — 10 populares, replies e cronológico" },
          registerNewUser: { sdkMethod: "fetchFreshFid / registerAccount", role: "Admin", action: "Registro on-chain da conta do bot 'a zer' e sub-agentes" },
          updateProfileAndVerification: { sdkMethod: "updateUserProfile / addVerification / deleteVerification", role: "Admin", action: "Manutenção institucional da Embassy e vínculo de carteiras" },
          fetchAuthUrlAndByX: { sdkMethod: "fetchAuthorizationUrl / lookupUsersByXUsername", role: "L1_Envoy", action: "Ponte de identidade com Twitter/X fora do Farcaster" },
        },

        // 2. ✍️ Signatário (Signer)
        signer: {
          neynarManaged: { sdkMethod: "fetchSigner / createSigner / registerSignedKey", role: "L1_Envoy", action: "Delegação segura sem expor chave privada de custódia" },
          developerManaged: { sdkMethod: "lookupDeveloperManagedSigner / registerSignedKeyForDeveloperManagedSigner", role: "L2_Escriba", action: "Assinatura criptográfica de alta segurança para Treaties H-A-H" },
          listSigners: { sdkMethod: "fetchSigners", role: "Admin", action: "Auditoria de agentes autorizados a falar pela DAO Embassy" },
        },

        // 3. 💬 Elenco (Cast)
        cast: {
          embeddedUrlMetadata: { sdkMethod: "lookupCastUrlMetadata", role: "L2_Escriba", action: "Extração de provas de entrega (GitHub, Questbook, KarmaHQ GAP)" },
          byHashOrBulk: { sdkMethod: "lookUpCastByHashOrWarpcastUrl / fetchBulkCasts", role: "L0_Scout", action: "Recuperação de histórico de conversas e propostas" },
          postAndDeleteCast: { sdkMethod: "publishCast / deleteCast", role: "L1_Envoy", action: "Publicação de diários build-in-public, Treaties e chamadas HaaS" },
          searchCasts: { sdkMethod: "searchCasts", role: "L0_Scout", action: "Mineração semântica de 'grant', 'DAO', 'Maha Grid', 'OpenGov'" },
          conversationAndComposer: { sdkMethod: "lookupCastConversation / fetchComposerActions", role: "L2_Escriba", action: "Mapeamento de árvores de debate e intenções de coalizão" },
        },

        // 4. 📰 Alimentação (Feed)
        feed: {
          userFollowingAndForYou: { sdkMethod: "fetchFeed / fetchFeedForYou", role: "L0_Scout", action: "Campo de observação personalizado da Embassy" },
          channelsAndParentUrls: { sdkMethod: "fetchFeedByChannelIds / fetchFeedByParentUrls", role: "L0_Scout", action: "Monitoramento contínuo de /dao, /web3, /build e /gaming" },
          castsWithMiniApps: { sdkMethod: "fetchFramesOnlyFeed", role: "L0_Scout", action: "Filtragem de casts contendo Frames v2 e Mini Apps" },
          trendingFeeds: { sdkMethod: "fetchTrendingFeed", role: "L0_Scout", action: "Radar de tendências para o Scout Agent" },
        },

        // 5. 👍 Reação (Reaction)
        reaction: {
          postAndDeleteReaction: { sdkMethod: "publishReaction / deleteReaction", role: "L1_Envoy", action: "Sinalização diplomática de presença e endosso" },
          reactionsForUserOrCast: { sdkMethod: "fetchUserReactions / fetchCastReactions", role: "L2_Escriba", action: "Medição de engajamento comunitário para relatórios de grant" },
        },

        // 6. 🔔 Notificações (Notifications)
        notifications: {
          forUserByChannelOrParent: { sdkMethod: "fetchAllNotifications / fetchChannelNotificationsForUser", role: "L1_Envoy", action: "Alertas de menções, propostas ou respostas HaaS" },
          markAsSeen: { sdkMethod: "markNotificationsAsSeen", role: "L1_Envoy", action: "Gestão de estado de leitura do bot 'a zer'" },
        },

        // 7. 📡 Canal (Channel — Diplomatic Desks)
        channel: {
          fetchChannelInfo: { sdkMethod: "lookupChannel / searchChannels / fetchBulkChannels", role: "L0_Scout", action: "Inspeção de regras e governança de canais" },
          membersManagement: { sdkMethod: "fetchChannelMembers / inviteToChannel / removeChannelMember / respondChannelInvite", role: "L1_Envoy", action: "Gestão de diplomatas e convites nos Diplomatic Desks" },
          fetchFollowers: { sdkMethod: "fetchFollowersForChannel / fetchRelevantFollowersForChannel", role: "L0_Scout", action: "Mapeamento de audiência qualificada" },
          userChannelsAndFollow: { sdkMethod: "fetchUsersChannels / followChannel / unfollowChannel", role: "L1_Envoy", action: "Presença ativa nos canais de bens públicos" },
          trendingChannels: { sdkMethod: "fetchTrendingChannels / fetchUsersActiveChannels", role: "L0_Scout", action: "Descoberta de novos polos de atividade DAO" },
        },

        // 8. 🔗 Segue (Follows — Grafo Social)
        follows: {
          followersAndRelevant: { sdkMethod: "fetchFollowers / fetchRelevantFollowers / fetchFollowing", role: "L2_Escriba", action: "Extração de topologia social para cálculo de Fiedler lambda_2" },
          suggestAndUpdateFollow: { sdkMethod: "fetchFollowSuggestions / followUser / unfollowUser", role: "L1_Envoy", action: "Expansão de pontes entre buracos estruturais (Burt)" },
        },

        // 9. 💾 Armazenamento (Storage)
        storage: {
          allocationAndUsage: { sdkMethod: "lookupUserStorageAllocations / lookupUserStorageUsage", role: "Admin", action: "Monitoramento de capacidade de armazenamento do bot" },
          buyStorage: { sdkMethod: "buyStorage", role: "L3_Treasury", action: "Aquisição automática de storage para arquivar evidências L4" },
        },

        // 10. 🖼️ Quadro (Frame / Mini App)
        frameMiniApp: {
          notifications: { sdkMethod: "fetchFrameNotificationTokens / publishFrameNotifications", role: "L1_Envoy", action: "Notificações push para jogadores do Frame Diário" },
          developerHosted: { sdkMethod: "postDeveloperHostedFrame / validateFrameAction / fetchFrameAnalytics", role: "L2_Escriba", action: "Validação criptográfica de jogadas D6 e votos de coalizão" },
          neynarHosted: { sdkMethod: "lookupNeynarFrame / createNeynarFrame / updateNeynarFrame / deleteNeynarFrame / fetchNeynarFrames", role: "L1_Envoy", action: "Geração instantânea de Frames de enquetes e Treaties" },
          catalogAndMeta: { sdkMethod: "fetchMiniAppsCatalog / fetchRelevantMiniApps / fetchFrameMetaTagsFromUrl", role: "L0_Scout", action: "Indexação do Mini App Maha Grid no catálogo global" },
        },

        // 11. 🤖 Agentes (Agentic Features — Web4 Core)
        agenticFeatures: {
          castConversationSummary: { sdkMethod: "fetchCastConversationSummary", role: "L2_Escriba", action: "Resumo executivo de 3 linhas (Voter Digest) + Efeito Observador (⟁)" },
          userInteractions: { sdkMethod: "fetchUserInteractions", role: "L2_Escriba", action: "Quantificação de sinergia H-A-H entre proponentes" },
          dynamicTransactionFrames: { sdkMethod: "createDynamicTransactionFrame / getDynamicTransactionFrame", role: "L3_Treasury", action: "Frames DeFAI para staking, pagamento HaaS/A2H e mint de SBT" },
        },

        // 12–17. 🆔 fname, 🪝 Webhook, ⚡ Action, 🔇 Mute, 🚫 Block, ⛔ Ban
        governanceAndDefense: {
          fnameAvailability: { sdkMethod: "isFnameAvailable", role: "Admin", action: "Verificação de handles institucionais (@mahagrid, @azer)" },
          webhooks: { sdkMethod: "lookupWebhook / createWebhook / updateWebhook / deleteWebhook", role: "L0_Scout", action: "Ouvidos em tempo real do bot 'a zer' para eventos de cast/reação" },
          crossAppActions: { sdkMethod: "fetchUserActionsAcrossApps", role: "L0_Scout", action: "Rastreamento de reputação transversal entre apps" },
          muteBlockBan: { sdkMethod: "fetchMuteList / muteUser / blockUser / banUsersFromApp", role: "Defense", action: "Isolamento ativo de contas spam e carteiras Sybil (Kalindi/Takshaka)" },
        },

        // 18–21. ⛓️ Onchain, 🔑 Login SIWF, 📈 Metrics, 🪙 Deploy Fungible
        onchainAndMetrics: {
          tokenBalanceAndOwners: { sdkMethod: "fetchUserBalance / fetchRelevantOwners", role: "L3_Treasury", action: "Verificação de holdings para elegibilidade de grants e Escudo SBT" },
          hypersubAndSubscribers: { sdkMethod: "fetchSubscriptionsForFid / fetchSubscribersForFid / checkHypersub", role: "L3_Treasury", action: "Assinaturas on-chain para sustentar o serviço híbrido do Escriba" },
          loginSiwfNonce: { sdkMethod: "fetchNonce", role: "Auth", action: "Autenticação Sign In With Farcaster (SIWF) no APK e Web4 PWA" },
          castMetrics: { sdkMethod: "fetchCastMetrics", role: "L2_Escriba", action: "Prova auditável de alcance e tração para Questbook e KarmaHQ" },
          deployFungible: { sdkMethod: "deployFungible", role: "L3_Treasury", action: "Implantação programática de tokens comunitários pelo Treasury Agent" },
        },
      },

      // 🏛️ Farcaster Hub API (Acesso Direto ao Protocolo)
      farcasterHubApi: {
        infoSync: "getInfo / Sync Status — Auditoria de sincronização de shards do Hub",
        castsDirect: "getCastById / getCastsByFid / getCastsByMention / getCastsByParent",
        reactionsDirect: "getReactionById / getReactionsByCast / getReactionsByFid / getReactionsByTarget",
        linksGraph: "getLinkById / getLinksByFid / getLinksByTarget — Grafo bruto para Network Science",
        userData: "getUserDataByFid — Metadados brutos de perfil",
        appearanceFids: "getFids — Censo completo de FIDs no protocolo",
        storageLimits: "getCurrentStorageLimitsByFid — Cotas de armazenamento",
        usernameProofs: "getUsernameProofsByFid / getUsernameProof — Provas criptográficas de fname/ENS",
        verifications: "getVerificationsByFid — Provas assinadas de carteiras Ethereum e Solana",
        onChainEvents: "getOnChainEvents / getIdRegistryOnChainEvent / getOnChainSignersByFid",
        messages: "submitMessage / validateMessage — Submissão direta de pacotes protobuf assinados",
        hubEvents: "getEvents / getEventById — Stream de eventos de baixo nível do protocolo",
      },
    };
  }
}

if (process.argv[1] === __filename) {
  const brain = new AzerEthnographerBrain();
  const matrix = brain.getFullApiOperationalMatrix();
  const outPath = path.resolve(__dirname, "../simulations/output/azer_neynar_v2_matrix.json");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(matrix, null, 2), "utf-8");
  console.log("✅ [Bot 'a zer' Brain] Matriz completa Farcaster API V2 (Neynar) + Hub API gerada!");
  console.log(`🛰️ Categorias Neynar V2 mapeadas: ${Object.keys(matrix.neynarApiV2).length} super-módulos | Categorias Hub API: ${Object.keys(matrix.farcasterHubApi).length}`);
  console.log(`📄 Salvo em: ${outPath}`);
}
