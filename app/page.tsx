import { TabCard } from "@/components/custom/tab-card"
import { TAB_CARD_EXAMPLE_PROPS } from "@/components/custom/tab-card.example"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <TabCard tabs={TAB_CARD_EXAMPLE_PROPS} />
    </div>
  )
}
