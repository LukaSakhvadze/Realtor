export const dropdownArrowSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="m7 14l5-5l5 5H7Z" />
  </svg>
);

const additionalResourceList1 = [
  {
    href: "/",
    content: "Los Angeles, CA Real Estate",
    id: 1,
  },
  {
    href: "/",
    content: "The Villages, FL Real Estate",
    id: 2,
  },
  {
    href: "/",
    content: "New York, NY Real Estate",
    id: 3,
  },
  {
    href: "/",
    content: "Prescott, AZ Real Estate",
    id: 4,
  },
  {
    href: "/",
    content: "Corona, CA Real Estate",
    id: 5,
  },
];
const additionalResourceList2 = [
  {
    href: "/",
    content: "Bradenton, FL New Homes",
    id: 1,
  },
  {
    href: "/",
    content: "Port Charlotte, FL New Homes",
    id: 2,
  },
  {
    href: "/",
    content: "Atlanta, GA New Homes",
    id: 3,
  },
  {
    href: "/",
    content: "Sarasota, FL New Homes",
    id: 4,
  },
  {
    href: "/",
    content: "El Paso, TX New Homes",
    id: 5,
  },
];
const additionalResourceList3 = [
  {
    href: "/",
    content: "Addams Family House",
    id: 1,
  },
  {
    href: "/",
    content: "Fair housing",
    id: 2,
  },
  {
    href: "/",
    content: "Best Tenant Screening Services",
    id: 3,
  },
  {
    href: "/",
    content: "Best Sites to Find Tenants",
    id: 4,
  },
  {
    href: "/",
    content: "Manage Rentals",
    id: 5,
  },
];
const additionalResourceList4 = [
  {
    href: "/",
    content: "Alabama Homes For Sale",
    id: 1,
  },
  {
    href: "/",
    content: "Alaska Homes For Sale",
    id: 2,
  },
  {
    href: "/",
    content: "Arizona Homes For Sale",
    id: 3,
  },
  {
    href: "/",
    content: "Arkansas Homes For Sale",
    id: 4,
  },
  {
    href: "/",
    content: "California Homes For Sale",
    id: 5,
  },
];
const hiddenAdditionalResourceList1=[
  {
    href: "/",
    content: "Seattle, WA Real Estate",
    column:"1",
    id: 1,
  },
  {
    href: "/",
    content: "Fontana, CA Real Estate",
    column:"1",
    id: 2,
  },
  {
    href: "/",
    content: "Moreno Valley, CA Real Estate",
    column:"1",
    id: 3,
  },
  {
    href: "/",
    content: "Aurora, IL Real Estate",
    column:"1",
    id: 4,
  },
]
const hiddenAdditionalResourceList2=[
  {
    href: "/",
    content: "Meridian, ID New Homes",
    id: 1,
  },
  {
    href: "/",
    content: "Fort Worth, TX New Homes",
    id: 2,
  },
]
const hiddenAdditionalResourceList3=[
  {
    href: "/",
    content: "List Your Rental",
    id: 1,
  },
]
const hiddenAdditionalResourceList4=[
  {
    href: "/",
    content: "Colorado Homes For Sale",
    id: 1,
  },
  {
    href: "/",
    content: "Connecticut Homes For Sale",
    id: 2,
  },
  {
    href: "/",
    content: "Delaware Homes For Sale",
    id: 3,
  },
  {
    href: "/",
    content: "Washington DC Homes For Sale",
    id: 4,
  },
]

export const additionalResourceLists1 = [
  { shownItems: additionalResourceList1, hiddenItems:hiddenAdditionalResourceList1,title: "Popular Real Estate Markets",id: 1, i:0},
  { shownItems: additionalResourceList2, hiddenItems:hiddenAdditionalResourceList2,title: "Popular New Constructions", id: 2, i:1 },
  { shownItems: additionalResourceList3, hiddenItems:hiddenAdditionalResourceList3,title: "Real Estate Resources", id: 3, i:2 },
  { shownItems: additionalResourceList4, hiddenItems:hiddenAdditionalResourceList4,title: "Homes For Sale by State", id: 4, i:3 },
];
