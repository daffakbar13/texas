import {
  ILDummyServing1,
  ILDummyServing10,
  ILDummyServing2,
  ILDummyServing3,
  ILDummyServing4,
  ILDummyServing5,
  ILDummyServing6,
  ILDummyServing7,
  ILDummyServing8,
  ILDummyServing9,
} from '@texas/assets'

const VARIANT_ITEMS_DUMMY = [
  { variantName: 'Sauce BBQ', price: 2000 },
  { variantName: 'Sauce Blackpepper', price: 2000 },
  { variantName: 'Sauce Tomato', price: 0 },
]

const VARIANT_GROUP_DUMMY = [
  {
    variantGroupName: 'Sauce Variants',
    isHaveMinimumChoice: true,
    isHaveMaximumChoice: false,
    minimumChoice: 1,
    maximumChoice: 0,
    variantItems: VARIANT_ITEMS_DUMMY,
  },
  {
    variantGroupName: 'Hot/Ice',
    isHaveMinimumChoice: true,
    isHaveMaximumChoice: true,
    minimumChoice: 1,
    maximumChoice: 1,
    variantItems: VARIANT_ITEMS_DUMMY,
  },
  {
    variantGroupName: 'Extra Toppings',
    isHaveMinimumChoice: false,
    isHaveMaximumChoice: true,
    minimumChoice: 0,
    maximumChoice: 2,
    variantItems: VARIANT_ITEMS_DUMMY,
  },
  {
    variantGroupName: 'Others',
    isHaveMinimumChoice: false,
    isHaveMaximumChoice: false,
    minimumChoice: 0,
    maximumChoice: 0,
    variantItems: VARIANT_ITEMS_DUMMY,
  },
]

const SERVING_ITEMS_DUMMY = [
  {
    servingName: 'Air Fryer Pizza',
    servingDescription:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere and the athlete's performance will generally be better at high altitude.",
    servingPrice: 13007,
    servingDiscount: 2000,
    servingNett: 10827,
    servingImage: ILDummyServing1.src,
    isHaveVariants: true,
    variantLists: VARIANT_GROUP_DUMMY,
    cartSummary: [],
  },
  {
    servingName: 'Tuscan Tortellini Soup',
    servingDescription:
      'In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic. According to Kant, knowledge about space is synthetic, in that statements about space are not simply true by virtue of the meaning of the words in the statement. In his work, Kant rejected the view that space must be either a substance or relation. Instead he came to the conclusion that space and time are not discovered by humans to be objective features of the world, but imposed by us as part of a framework for organizing experience.',
    servingPrice: 78268,
    servingDiscount: 2000,
    servingNett: 73873,
    servingImage: ILDummyServing2.src,
    isHaveVariants: false,
    variantLists: [],
    cartSummary: [],
  },
  {
    servingName: 'Tuscan Spaghetti Squash',
    servingDescription:
      'Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.',
    servingPrice: 46212,
    servingDiscount: 2000,
    servingNett: 35468,
    servingImage: ILDummyServing3.src,
    isHaveVariants: true,
    variantLists: VARIANT_GROUP_DUMMY,
    cartSummary: [],
  },
  {
    servingName: '5-Cheese Marinara',
    servingDescription:
      'The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals.',
    servingPrice: 98634,
    servingDiscount: 2000,
    servingNett: 76548,
    servingImage: ILDummyServing4.src,
    isHaveVariants: false,
    variantLists: [],
    cartSummary: [],
  },
  {
    servingName: 'Chicken Marsala',
    servingDescription:
      'Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. The concept of space is considered to be of fundamental importance to an understanding of the physical universe. However, disagreement continues between philosophers over whether it is itself an entity, a relationship between entities, or part of a conceptual framework.',
    servingPrice: 77643,
    servingDiscount: 2000,
    servingNett: 75426,
    servingImage: ILDummyServing5.src,
    isHaveVariants: true,
    variantLists: VARIANT_GROUP_DUMMY,
    cartSummary: [],
  },
  {
    servingName: 'Homemade Ricotta',
    servingDescription:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves with a characteristic velocity. The modern view is that light needs no medium of transmission, but Maxwell and his contemporaries were convinced that light waves were propagated in a medium, analogous to sound propagating in air, and ripples propagating on the surface of a pond. This hypothetical medium was called the luminiferous aether, at rest relative to the 'fixed stars' and through which the Earth moves. Fresnel's partial ether dragging hypothesis ruled out the measurement of first-order (v/c) effects, and although observations of second-order effects (v2/c2) were possible in principle, Maxwell thought they were too small to be detected with then-current technology.",
    servingPrice: 126489,
    servingDiscount: 2000,
    servingNett: 115462,
    servingImage: ILDummyServing6.src,
    isHaveVariants: false,
    variantLists: [],
    cartSummary: [],
  },
  {
    servingName: 'Easy Carbonara',
    servingDescription:
      'In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic. According to Kant, knowledge about space is synthetic, in that statements about space are not simply true by virtue of the meaning of the words in the statement. In his work, Kant rejected the view that space must be either a substance or relation. Instead he came to the conclusion that space and time are not discovered by humans to be objective features of the world, but imposed by us as part of a framework for organizing experience.',
    servingPrice: 64321,
    servingDiscount: 2000,
    servingNett: 54213,
    servingImage: ILDummyServing7.src,
    isHaveVariants: true,
    variantLists: VARIANT_GROUP_DUMMY,
    cartSummary: [],
  },
  {
    servingName: 'Caprese Lasagna Roll-Ups',
    servingDescription:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves with a characteristic velocity. The modern view is that light needs no medium of transmission, but Maxwell and his contemporaries were convinced that light waves were propagated in a medium, analogous to sound propagating in air, and ripples propagating on the surface of a pond. This hypothetical medium was called the luminiferous aether, at rest relative to the 'fixed stars' and through which the Earth moves. Fresnel's partial ether dragging hypothesis ruled out the measurement of first-order (v/c) effects, and although observations of second-order effects (v2/c2) were possible in principle, Maxwell thought they were too small to be detected with then-current technology.",
    servingPrice: 65498,
    servingDiscount: 2000,
    servingNett: 43215,
    servingImage: ILDummyServing8.src,
    isHaveVariants: false,
    variantLists: [],
    cartSummary: [],
  },
  {
    servingName: 'Perfect Lasagna',
    servingDescription:
      'In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic. According to Kant, knowledge about space is synthetic, in that statements about space are not simply true by virtue of the meaning of the words in the statement. In his work, Kant rejected the view that space must be either a substance or relation. Instead he came to the conclusion that space and time are not discovered by humans to be objective features of the world, but imposed by us as part of a framework for organizing experience.',
    servingPrice: 84624,
    servingDiscount: 2000,
    servingNett: 76543,
    servingImage: ILDummyServing9.src,
    isHaveVariants: true,
    variantLists: VARIANT_GROUP_DUMMY,
    cartSummary: [],
  },
  {
    servingName: 'Best-Ever Italian Meatballs',
    servingDescription:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere and the athlete's performance will generally be better at high altitude.",
    servingPrice: 86131,
    servingDiscount: 2000,
    servingNett: 65432,
    servingImage: ILDummyServing10.src,
    isHaveVariants: false,
    variantLists: [],
    cartSummary: [],
  },
]

export const SERVING_DUMMY = [
  {
    servingCategoryName: 'Foods',
    servingItems: SERVING_ITEMS_DUMMY,
  },
  {
    servingCategoryName: 'Drinks',
    servingItems: SERVING_ITEMS_DUMMY,
  },
  {
    servingCategoryName: 'Burger',
    servingItems: SERVING_ITEMS_DUMMY,
  },
  {
    servingCategoryName: 'Pizza',
    servingItems: SERVING_ITEMS_DUMMY,
  },
  {
    servingCategoryName: 'Tea',
    servingItems: SERVING_ITEMS_DUMMY,
  },
  {
    servingCategoryName: 'Coffee',
    servingItems: SERVING_ITEMS_DUMMY,
  },
]
